import React from 'react'
import { Link } from 'react-router-dom'

const NewsNav = (props) => {
  return (
    <>
      <ul className="nav nav-tabs justify-content-center my-2">
  <li className={`nav-link ${props.category==="general"?"active":''}`}>
    <Link className="nav-link" to="/">General</Link>
  </li>
  <li className={`nav-link ${props.category==="business"?"active":''}`}>
    <Link className="nav-link" to="/business">Business</Link>
  </li>
  <li className={`nav-link ${props.category==="entertainment"?"active":''}`} >
    <Link className="nav-link" to="/entertainment">Entertainment</Link>
  </li>
  <li className={`nav-link ${props.category==="health"?"active":''}`} >
    <Link className="nav-link" to="/health">Health</Link>
  </li>
  <li className={`nav-link ${props.category==="science"?"active":''}`} >
    <Link className="nav-link" to="/science">Science</Link>
  </li>
  <li className={`nav-link ${props.category==="sports"?"active":''}`} >
    <Link className="nav-link" to="/sports">Sports</Link>
  </li>
  <li className={`nav-link ${props.category==="technology"?"active":''}`} >
    <Link className="nav-link" to="/technology">Technology</Link>
  </li>
  
</ul>
    </>
  )
}

export default NewsNav
