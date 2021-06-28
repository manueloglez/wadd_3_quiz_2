import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = ({ currentUser, destroySession }) => {
  return <nav>
    <NavLink to="/">Home</NavLink>
    {currentUser ? (<>
        <span >Welcome, {currentUser.first_name}</span>
        <button onClick={destroySession}>Sign Out</button>
      </>) : (
      <>
        <NavLink to="/sign_in">
          Sign In
        </NavLink>

        <NavLink to="/sign_up">
          Sign Up
        </NavLink>
      </>
      )}
  </nav>
}

export default Navbar