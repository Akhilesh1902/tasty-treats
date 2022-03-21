import React, { useEffect } from "react"
import CuisineCard from "../components/cards/CuisineCard"
import Hero from "../components/Hero"
import Salad2 from "../assets/salad1.jpg"
import PageFooter from "../components/PageFooter"
import { motion } from "framer-motion"

const Cuisine = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.1, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="heroBgContainer">
      <motion.div
        className="heroBg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}>
        <Hero
          head={"Cuisine"}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel`}
        />
      </motion.div>
      <div className="cuisines">
        <div className="cuisineContainer">
          <CuisineCard
            head={"Tasty Cuisine"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            }
            image={Salad2}
          />
          <CuisineCard
            head={"Tasty Cuisine"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            }
            image={Salad2}
          />
          <CuisineCard
            head={"Tasty Cuisine"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            }
            image={Salad2}
          />
          <CuisineCard
            head={"Tasty Cuisine"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            }
            image={Salad2}
          />
        </div>
      </div>
      <PageFooter />
    </motion.div>
  )
}

export default Cuisine
