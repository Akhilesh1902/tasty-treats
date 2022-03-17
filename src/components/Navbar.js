import React, { useState } from "react"
import { IoMdRestaurant } from "react-icons/io"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [hamBurgerClick, sethamBurgerClick] = useState(false)

  return (
    <>
      <NavLink
        to="/home"
        className="logo"
        style={{ textDecoration: "none", color: "hsl(var(--white-clr))" }}>
        <IoMdRestaurant />
        <h2>Restaurant</h2>
      </NavLink>
      <div className={`navlist ${hamBurgerClick ? "show" : ""}`}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/cuisine">Cuisine</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <GiHamburgerMenu
        className="hamburgerMenu"
        onClick={() => {
          sethamBurgerClick(!hamBurgerClick)
        }}
      />
    </>
  )
}

export default Navbar
