import React from "react"
import Arrowsvg from "../svg/Arrowsvg"

const Hero = ({ head, content, button }) => {
  return (
    <>
      <div className="heroOverlay"></div>
      <div className="heroContent">
        <h1>{head}</h1>
        <p>{content}</p>
        {button ? <button className="btn tastenow">Taste Now</button> : <></>}
        <Arrowsvg />
      </div>
    </>
  )
}

export default Hero
