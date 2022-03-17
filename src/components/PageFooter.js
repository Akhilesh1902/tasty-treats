import React from "react"
import FbIcon from "../svg/FaceBook.svg"
import Insta from "../svg/Insta.svg"
import Pintrest from "../svg/Pintrest.svg"
import Mail from "../svg/Mail.svg"

const PageFooter = () => {
  return (
    <div
      className="containerWrapper"
      style={{ background: `hsl(212 23% 15%)` }}>
      <div className="container footerContainer">
        <div className="footerLinks">
          <ul>
            <li>
              <a href="/">More About Us</a>
            </li>
            <li>
              <a href="/">Customer Suppout</a>
            </li>
            <li>
              <a href="/">Book a Table</a>
            </li>
            <li>
              <a href="/">Contact The Manager</a>
            </li>
            <li>
              <a href="/">Go to restaurant</a>
            </li>
          </ul>
          <div className="icons">
            <img src={FbIcon} alt="" />
            <img src={Insta} alt="" />
            <img src={Pintrest} alt="" />
            <img src={Mail} alt="" />
          </div>
        </div>
        <form className="footerForm">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-mail" required />
          <textarea cols="30" rows="10" placeholder="Message"></textarea>
          <button className="btn footerBtn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PageFooter
