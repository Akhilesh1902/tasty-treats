import React, { useEffect } from "react"
import Hero from "../components/Hero"
import Images from "../components/imageSection/Images"
import CardContainer from "../components/cards/CardContainer"
import PageFooter from "../components/PageFooter"
import { motion } from "framer-motion"

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.1, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="heroBgContainer">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="heroBg">
        <Hero
          head={"Tasty Treats"}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel`}
          button
        />
      </motion.div>
      <Images />
      <CardContainer />
      <PageFooter />
    </motion.div>
  )
}

export default Home
