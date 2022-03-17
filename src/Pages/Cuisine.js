import React from "react"
import CuisineCard from "../components/cards/CuisineCard"
import Hero from "../components/Hero"
import Salad2 from "../assets/salad1.jpg"
import PageFooter from "../components/PageFooter"

const Cuisine = () => {
  return (
    <>
      <div className="heroBg">
        <Hero
          head={"Cuisine"}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel`}
        />
      </div>
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
    </>
  )
}

export default Cuisine
