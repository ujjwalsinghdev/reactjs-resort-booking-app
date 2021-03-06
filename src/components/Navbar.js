import React, { useState } from "react"
import "./Navbar.css"

import logo from "../images/logo.svg"
import { IoMenu } from "react-icons/io5"

import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="beach resort logo" />
          </Link>
          <button onClick={handleToggle} type="button" className="nav-btn">
            <IoMenu className="nav-icon"></IoMenu>
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
