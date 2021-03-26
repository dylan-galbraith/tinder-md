import React from "react";
import "./Bookmark.scss";
import Navbar from "../Navbar/Navbar";
import drImage from "../../assets/images/doctor-1.jpg";
import location from "../../assets/icons/location-icon.svg";

function Bookmark(props) {
  const goChat = () => {
    props.history.push("/chat");
  };

  return (
    <>
      <div className="header">
        <h1 className="header__title">Saved Doctors</h1>
      </div>
      <ul className="drList">
        <li className="drList__card">
          <div className="drList__card--box">
            <img
              className="drList__card--image"
              src={drImage}
              alt="doctor image"
            />
            <div className="drList__card--info">
              <p className="drList__card--name">Dr. Kathryn J. Atkinson</p>
              <div className="drList__card--lang">
                <span className="drList__card--lang1">English</span>
                <span>Spanish</span>
              </div>
            </div>
          </div>
          <div className="drList__card--location">
            <div className="drList__card--locationBox">
              <img
                className="drList__card--icon"
                src={location}
                alt="location icon"
              />
              Toronto, ON
            </div>
            <span className="drList__card--measure">8 kilometers away</span>
          </div>
          <div className="drList__card--button">
            <button className="drList__card--goChat" onClick={goChat}>CHAT</button>
          </div>
        </li>
      </ul>
      <Navbar />
    </>
  );
}

export default Bookmark;
