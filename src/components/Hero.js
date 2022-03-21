import React from "react"
import Arrowsvg from "../svg/Arrowsvg"
import { motion } from "framer-motion"

const Hero = ({ head, content, button }) => {
  const Parent = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }
  const Children = {
    initial: {
      opacity: 0,
      // scale: 1.1,
      x: -50,
      transition: { duration: 0.5 },
    },
    animate: {
      opacity: 1,
      // scale: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      // scale: 1.1,
      x: -50,
      transition: { duration: 0.5 },
    },
  }
  return (
    <>
      <div className="heroOverlay"></div>
      <motion.div
        variants={Parent}
        initial="initial"
        animate="animate"
        className="heroContent">
        <motion.h1
          variants={Children}

          // transition={{ duration: 0.5 }}
        >
          {head}
        </motion.h1>
        <motion.p
          variants={Children}
          // transition={{ duration: 0.5 }}
        >
          {content}
        </motion.p>
        {button ? (
          <motion.button variants={Children} className="btn tastenow">
            Taste Now
          </motion.button>
        ) : (
          <></>
        )}
        <Arrowsvg />
      </motion.div>
    </>
  )
}

export default Hero
