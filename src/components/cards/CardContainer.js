import React from "react"
import Cards from "./Cards"
import Beverage from "../../assets/beverage.jpg"

const CardContainer = () => {
  return (
    <div className="cardDiv">
      <h1>User Review</h1>
      <div className="cardWrapper">
        <Cards
          image={Beverage}
          head="Like the Ambience"
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          }
        />

        <Cards
          image={Beverage}
          head="Like the Ambience"
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          }
        />

        <Cards
          image={Beverage}
          head="Like the Ambience"
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          }
        />
      </div>
    </div>
  )
}

export default CardContainer
