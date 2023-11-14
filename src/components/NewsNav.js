import React from 'react'
import { Link } from 'react-router-dom'

const NewsNav = (props) => {
  return (
    <>
      <ul class="nav nav-tabs justify-content-center my-2">
  <li class={`nav-link ${props.category==="general"?"active":''}`}>
    <Link class="nav-link" to="/">General</Link>
  </li>
  <li class={`nav-link ${props.category==="business"?"active":''}`}>
    <Link class="nav-link" to="/business">Business</Link>
  </li>
  <li class={`nav-link ${props.category==="entertainment"?"active":''}`} >
    <Link class="nav-link" to="/entertainment">Entertainment</Link>
  </li>
  <li class={`nav-link ${props.category==="health"?"active":''}`} >
    <Link class="nav-link" to="/health">Health</Link>
  </li>
  <li class={`nav-link ${props.category==="science"?"active":''}`} >
    <Link class="nav-link" to="/science">Science</Link>
  </li>
  <li class={`nav-link ${props.category==="sports"?"active":''}`} >
    <Link class="nav-link" to="/sports">Sports</Link>
  </li>
  <li class={`nav-link ${props.category==="technology"?"active":''}`} >
    <Link class="nav-link" to="/technology">Technology</Link>
  </li>
  
</ul>
    </>
  )
}

export default NewsNav
