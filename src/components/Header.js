import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/meals">Meals</NavLink> 
      </nav>
    );
}

export default Header