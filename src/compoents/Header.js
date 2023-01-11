import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <h1 className="store-header">TRINKETS</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/item">Shop !</Link>
      </div>
    </nav>
  )
}

export default Header
