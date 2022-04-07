import React from "react"
import Home from "./Home"
import { Routes, Route, useLocation } from "react-router-dom"
import Cuisine from "./Cuisine"
import Blog from "./Blog"
import { AnimatePresence } from "framer-motion"

const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
