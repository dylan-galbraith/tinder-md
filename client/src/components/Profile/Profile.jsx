import React from "react";
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom";
import "./Profile.scss";
import avatar from "../../assets/images/avatar.png";
import setting from "../../assets/icons/setting-icon.svg";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile__top">
          <img className="profile__top--icon" src={setting} alt="setting icon" />
        </div>
        <div className="profile__header">
          <img className="profile__header--avatar" src={avatar} alt="" />
          <h2 className="profile__header--name">Ricardo Gonzalez</h2>
        </div>
        <div className="card">
        <div className="card__personal">
          <div className="card__personal--title">
            <h3 className="card__personal--heading">Personal Info</h3>
            <Link className="card__personal--link" to="">Edit</Link>
          </div>
          <ul className="top-list">
            <li className="top-list__item">
              <div className="top-list__item--left">
                <h5 className="top-list__item--label">name</h5>
                <h4 className="top-list__item--input">Ricardo Gonzalez</h4>
                <h5 className="top-list__item--label">Age</h5>
                <h4 className="top-list__item--input">60</h4>
              </div>
              <div className="top-list__item--right">
                <h5 className="top-list__item--label">birthday</h5>
                <h4 className="top-list__item--input">August 30, 1961</h4>
                <h5 className="top-list__item--label">sex</h5>
                <h4 className="top-list__item--input">male</h4>
              </div>
            </li>
          </ul>
        </div>
        <div className="card__filter">
          <div className="card__filter--title">
            <h3 className="card__filter--heading">Filters and Preferences</h3>
            <Link className="card__filter--link" to="">Edit</Link>
          </div>
          <ul className="bottom-list">
            <li className="bottom-list__item">
                <h5 className="bottom-list__item--label">country</h5>
                <h4 className="bottom-list__item--input">Canada</h4>
                <h5 className="bottom-list__item--label">city</h5>
                <h4 className="bottom-list__item--input">Toronto</h4>
                <h5 className="bottom-list__item--label">preferred language</h5>
                <h4 className="bottom-list__item--input">english</h4>
                <h5 className="bottom-list__item--label">special requirements</h5>
                <h4 className="bottom-list__item--input">hearing aid</h4>
            </li>
          </ul>
        </div>
        
        </div>
        <div className="card__medical">
          <div className="card__medical--title">
            <h3 className="card__medical--heading">Medical History</h3>
            <Link className="card__medical--link" to="">View All</Link>
          </div>
          <ul className="bottom-list">
            <li className="bottom-list__item">
                <h5 className="bottom-list__item--label">DOCUMENT UPLOADS</h5>
                <h4 className="bottom-list__item--input">4 Files</h4>
                
            </li>
          </ul>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Profile;
