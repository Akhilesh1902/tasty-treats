import React from "react"

const CuisineCard = ({ head, content, image }) => {
  return (
    <div className="cuisineCard">
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

export default CuisineCard
