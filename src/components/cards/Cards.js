import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Cards = ({ image, head, content }) => {
  const cardAnimate = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView)
      cardAnimate.start({ x: 0, opacity: 1, transition: { duration: 0.5 } })
    if (!inView)
      cardAnimate.start({ x: -100, opacity: 0, transition: { duration: 0.5 } })
  }, [inView, cardAnimate])
  return (
    <motion.div animate={cardAnimate} ref={ref} className="cardContainer">
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

export default Cards
