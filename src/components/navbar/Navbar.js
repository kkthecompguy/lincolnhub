import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">Lincoln Hub</a>

        <button
         type="button"
         data-toggle="collapse"
         data-target="#NavbarContent"
         aria-controls="NavbarContent"
         aria-expanded="false"
         aria-label="ToggleNavigation"
         className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="NavbarContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Get Started</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
