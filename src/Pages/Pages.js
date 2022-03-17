import React from "react"
import Home from "./Home"
import { Routes, Route } from "react-router-dom"
import Cuisine from "./Cuisine"
import Blog from "./Blog"

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cuisine" element={<Cuisine />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default Pages
