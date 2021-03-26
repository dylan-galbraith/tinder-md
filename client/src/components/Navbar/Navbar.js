import "./Navbar.scss";
import home from "../../assets/icons/Vector-2.svg";
import chat from "../../assets/icons/Vector-4.svg";
import profile from "../../assets/icons/Vector.svg";
import save from "../../assets/icons/bookmark-icon.svg";
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
      <Link to="/home" className="nav__item">
        <img className="nav__item--homeIcon" src={home} alt="home icon" />
        <span className="nav__item--homeText">Home</span>
      </Link>
      <Link to="/bookmark" className="nav__item">
        <img className="nav__item--saveIcon" src={save} alt="save icon" />
        <span className="nav__item--saveText">Saved</span>
      </Link>
      <Link to="/chat" className="nav__item">
        <img className="nav__item--chatIcon" src={chat} alt="chat icon" />
        <span className="nav__item--chatText">Chat</span>
      </Link>
      <Link to="/profile" className="nav__item">
        <img className="nav__item--profileIcon" src={profile} alt="profile icon" />
        <span className="nav__item--profileText">Profile</span>
      </Link>
    </div>
  )
}

export default Navbar
