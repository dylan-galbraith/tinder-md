import React from 'react'
import NextButton from "../NextButton/NextButton";
import welcomeGraphic from "../../assets/icons/welcome-graphic.svg";
import "./ConfigWelcome.scss";
import Logo from "../../assets/connect-md-logo.png";

function ConfigWelcome() {
  return (
    <>
    <div className="content-0">
      <img className="content-0__avatar" src={Logo} alt="app logo"/>
      <h2 className="content-0__heading">Welcome to Match MD by Google</h2>
      <img className="content-0__image" src={welcomeGraphic} alt=""/>
      <p className="content-0__text">Let’s get you set up so you can begin your journey with more accessible healthcare and medical communication in the palm of your hand.</p>
    </div>
      <NextButton link="/config-1-language" />
      </>
  )
}

export default ConfigWelcome
