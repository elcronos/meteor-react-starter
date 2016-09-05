import React from 'react'
import { Navbar } from 'react-bootstrap'

export default NavbarCollapse = () => (
  <ul className="nav navbar-nav" id="menu-navbar-collapse">
    <li>
        <Navbar.Link data-toggle="collapse" data-target=".navbar-collapse.in" href="/">Home</Navbar.Link>
    </li>
    <li>
        <Navbar.Link data-toggle="collapse" data-target=".navbar-collapse.in" href="/about">About Us</Navbar.Link>
    </li>
    <li>
        <Navbar.Link data-toggle="collapse" data-target=".navbar-collapse.in" href="/contact">Contact Us</Navbar.Link>
    </li>
  </ul>
)
