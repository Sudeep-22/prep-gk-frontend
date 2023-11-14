import React, {useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    let location= useLocation();
  let Navigate = useNavigate();
  useEffect(() => {
    console.log(location);
  },[location]);
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    Navigate("/login")
  }
  return (
    <div>
      {console.log(location.pathname)}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">
      <img src="https://img.icons8.com/clouds/100/news.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
    </Link>
    <h3 className='me-5 brand-name'>GK-Prep</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">News</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/notes">Notes</Link>
        </li>       
      </ul>
      {!localStorage.getItem('token')?
      <form className="d-flex" role="search">
      <Link className="btn btn-primary mx-1" to="/signUp" role="button">Signup</Link>
      </form>: <button className="btn btn-primary mx-1" onClick={handleLogout}>LogOut</button>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
