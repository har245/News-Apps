import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  let [search, setSearch] = useState("")
  function postSearch(e) {
    e.preventDefault()
    props.changeSearch(search)
    setSearch("")
  }

  return (
    <nav className="navbar navbar-expand-lg background sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/" onClick={() => props.changeSearch("")}>News App</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/All" onClick={() => props.changeSearch("")}>All</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/Politics" onClick={() => props.changeSearch("")}>Politics</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/Crime" onClick={() => props.changeSearch("")}>Crime</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/Education" onClick={() => props.changeSearch("")}>Education</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/Entertainment" onClick={() => props.changeSearch("")}>Entertainment</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/Science" onClick={() => props.changeSearch("")}>Science</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/Technology" onClick={() => props.changeSearch("")}>Technology</NavLink></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Others
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/Sport" onClick={() => props.changeSearch("")}>Sport</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Cricket" onClick={() => props.changeSearch("")}>Cricket</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Olympics" onClick={() => props.changeSearch("")}>Olympics</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Economics" onClick={() => props.changeSearch("")}>Economics</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Health" onClick={() => props.changeSearch("")}>Health</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Wealth" onClick={() => props.changeSearch("")} >Wealth</NavLink></li>
                <li><NavLink className="dropdown-item" to="/World" onClick={() => props.changeSearch("")}>World</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Jokes" onClick={() => props.changeSearch("")}>Jokes</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
              </a>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => props.changeLanguage("hi")}>Hindi</button></li>
                <li><button className="dropdown-item" onClick={() => props.changeLanguage("en")}>English</button></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search" value={search} onSubmit={postSearch}>
            <input className="form-control me-2" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

