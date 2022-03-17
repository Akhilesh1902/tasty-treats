import React from "react"

const Cards = ({ image, head, content }) => {
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h2>{head}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Cards
