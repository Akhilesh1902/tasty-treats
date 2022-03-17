import React from "react"
import Hero from "../components/Hero"
import Images from "../components/imageSection/Images"
import CardContainer from "../components/cards/CardContainer"
import PageFooter from "../components/PageFooter"

const Home = () => {
  return (
    <>
      <div className="heroBg">
        <Hero
          head={"Tasty Treats"}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel`}
          button
        />
      </div>
      <Images />
      <CardContainer />
      <PageFooter />
    </>
  )
}

export default Home
