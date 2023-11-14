import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Login = (props) => {
    const [credentials,setCredentials] = useState({email:"",password:""})
    let Navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('mongodb+srv://sudeeppoojari03:Premitsomeone6656@cluster0.ukci0qa.mongodb.net/?retryWrites=true&w=majority/api/auth/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({email:credentials.email,password:credentials.password})
        });
          const json=await response.json()
          console.log(json);
          if(json.success){
            localStorage.setItem('token',json.authToken)
            props.setAlert("success","Login Successful")
            Navigate("/");
          }else{
            props.setAlert("danger","Login Unsuccessful!!")
          }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }

  return (
    <>
      <div className="container mt-5 pt-6">
        <div className="row">
          <div className="col-4 col-md-4 col-sm-8 m-auto">
            <div className="card border-0 shadow">
              <div className="card-body text-center">
                <form onSubmit={handleSubmit}>
                  <img src="https://img.icons8.com/clouds/100/news.png" alt="Logo" width="100" height="100" />
                  <h1 className="h3 mb-3 fw-normal">Please sign in </h1>
                  {/* <Notes setAlert={props.setAlert} /> */}
                  <input type="email" className="form-control my-4 py-2"  id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Email ID"/>
                  <input type="password" className="form-control my-4 py-2" value={credentials.password} name="password" onChange={onChange} id="password" placeholder="Password" />
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login