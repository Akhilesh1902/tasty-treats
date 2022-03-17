import React from "react"
import burger from "../../assets/burger.jpg"
import salad from "../../assets/salad1.jpg"

const Imagesection = ({ src, head, content, rotation, reverse, bg, col }) => {
  const img = [burger, salad]
  return (
    <div className="containerWrapper" style={{ background: `${bg}` }}>
      <div className="container">
        <div
          className="images"
          style={reverse ? { flexDirection: "row-reverse" } : {}}>
          <div
            className="imgContainer"
            style={{ transform: `rotate(${rotation})` }}>
            <img src={img[src]} alt="" />
          </div>
          <div className="details" style={{ color: `${col}` }}>
            <h2>{head}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Imagesection
