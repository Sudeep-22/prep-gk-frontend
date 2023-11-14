import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {
    const [details,setdetails] = useState({name:"",email:"",password:""})
    let Navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('mongodb+srv://sudeeppoojari03:Premitsomeone6656@cluster0.ukci0qa.mongodb.net/?retryWrites=true&w=majority/api/auth/createUser', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({name:details.name,email:details.email,password:details.password})
        });
          const json=await response.json()
          console.log(json);
          if(json.success){
            localStorage.setItem('token',json.authToken)
            props.setAlert("success","User created Successful")
            Navigate("/notes");
          }else{
            props.setAlert("danger","User Creation Failed!!")
          }
    }
    const onChange = (e) => {
        setdetails({ ...details, [e.target.name]: e.target.value })
      }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={details.name} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={details.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={details.password} name="password" onChange={onChange} id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
