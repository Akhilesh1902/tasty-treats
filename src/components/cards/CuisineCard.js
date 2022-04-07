import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const CuisineCard = ({ head, content, image }) => {
  const [ref, inView] = useInView({ threshold: 0.1 })

  const cardAnimate = useAnimation()
  useEffect(() => {
    if (inView)
      cardAnimate.start({ y: 0, opacity: 1, transition: { duration: 0.5 } })
    if (!inView)
      cardAnimate.start({ y: 50, opacity: 0, transition: { duration: 0.5 } })
  }, [inView, cardAnimate])

  return (
    <motion.div ref={ref} animate={cardAnimate} className="cuisineCard">
      <div className="imgContainer">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h2>{head}</h2>
        <p>{content}</p>
      </div>
    </motion.div>
  )
}

export default CuisineCard
