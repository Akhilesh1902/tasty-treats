import React, { useEffect } from "react"
import burger from "../../assets/burger.jpg"
import salad from "../../assets/salad1.jpg"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Imagesection = ({ src, head, content, rotation, reverse, bg, col }) => {
  const img = [burger, salad]

  const { ref, inView } = useInView({ threshold: 0.4 })
  const leftAnim = useAnimation()
  const rightAnim = useAnimation()

  useEffect(() => {
    const FinalPos = {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        bounce: 0.3,
      },
    }
    if (inView) {
      leftAnim.start(FinalPos)
      rightAnim.start(FinalPos)
    }
    if (!inView) {
      leftAnim.start({ x: -100, opacity: 0 })
      rightAnim.start({ x: 100, opacity: 0 })
    }
  }, [inView, leftAnim, rightAnim])

  return (
    <div className="containerWrapper" style={{ background: `${bg}` }}>
      <div className="container">
        <div
          ref={ref}
          className="images"
          style={reverse ? { flexDirection: "row-reverse" } : {}}>
          <motion.div
            initial={{ x: -50 }}
            animate={reverse ? rightAnim : leftAnim}
            className="imgContainerWrapper">
            <div
              className="imgContainer"
              style={{ transform: `rotate(${rotation})` }}>
              <img src={img[src]} alt="" />
            </div>
          </motion.div>
          <motion.div
            className="details"
            initial={{ x: 50 }}
            animate={reverse ? leftAnim : rightAnim}
            style={{ color: `${col}` }}>
            <h2>{head}</h2>
            <p>{content}</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Imagesection
