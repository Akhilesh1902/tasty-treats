import React, { useState } from "react"
import { IoMdRestaurant } from "react-icons/io"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const Navbar = () => {
  const [hamBurgerClick, sethamBurgerClick] = useState(false)

  const navLinkParent = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  }
  const navLinks = {
    initial: {
      x: -25,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <>
      <motion.div
        className="logo"
        initial={{
          x: -50,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}>
        <NavLink
          to="/home"
          className="logo"
          style={{ textDecoration: "none", color: "hsl(var(--white-clr))" }}>
          <IoMdRestaurant />
          <h2>Restaurant</h2>
        </NavLink>
      </motion.div>

      <motion.div
        variants={navLinkParent}
        animate="animate"
        initial="initial"
        className={`navlist ${hamBurgerClick ? "show" : ""}`}>
        <motion.div variants={navLinks}>
          <NavLink to="/home" className="navLink">
            Home
          </NavLink>
        </motion.div>
        <motion.div variants={navLinks}>
          <NavLink to="/cuisine" className="navLink">
            Cuisine
          </NavLink>
        </motion.div>
        <motion.div variants={navLinks}>
          <NavLink to="/blog" className="navLink">
            Blog
          </NavLink>
        </motion.div>
      </motion.div>
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
