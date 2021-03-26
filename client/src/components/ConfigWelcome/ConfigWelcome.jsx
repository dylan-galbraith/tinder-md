import React from 'react'
import NextButton from "../NextButton/NextButton";
import welcomeGraphic from "../../assets/icons/welcome-graphic.svg";

function ConfigWelcome() {
  return (
    <div>
      <img src="http://placehold.it/60x60" alt="app logo"/>
      <h2>Welcome to Match MD by Google</h2>
      <img src={welcomeGraphic} alt=""/>
      <p>Let’s get you set up so you can begin your journey with more accessible healthcare and medical communication in the palm of your hand.</p>
      
      <NextButton link="/config-1-language" />
    </div>
  )
}

export default ConfigWelcome
