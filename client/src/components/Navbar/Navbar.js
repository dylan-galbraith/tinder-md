import "./Navbar.scss";
import home from "../../assets/icons/Vector-2.svg";
import chat from "../../assets/icons/Vector-4.svg";
import profile from "../../assets/icons/Vector.svg";
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
      <div className="nav__item">
        <img className="nav__item--homeIcon" src={home} alt="home icon" />
        <span className="nav__item--homeText">Home</span>
      </div>
      <div className="nav__item">
        <img className="nav__item--chatIcon" src={chat} alt="chat icon" />
        <span className="nav__item--chatText">Chat</span>
      </div>
      <div className="nav__item">
        <img className="nav__item--profileIcon" src={profile} alt="profile icon" />
        <span className="nav__item--profileText">Profile</span>
      </div>
    </div>
  )
}

export default Navbar
