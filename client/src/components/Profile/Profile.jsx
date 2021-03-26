import React from "react";
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom";
import "./Profile.scss";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile__header">
          <img className="profile__header--avatar" src="http://placehold.it/50x50" alt="" />
          <h2 className="profile__header--name">Person's Name</h2>
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
                <h4 className="top-list__item--input">John Doe</h4>
                <h5 className="top-list__item--label">Age</h5>
                <h4 className="top-list__item--input">40</h4>
              </div>
              <div className="top-list__item--right">
                <h5 className="top-list__item--label">birthday</h5>
                <h4 className="top-list__item--input">August 30, 1980</h4>
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
                <h4 className="bottom-list__item--input">canada</h4>
                <h5 className="bottom-list__item--label">city</h5>
                <h4 className="bottom-list__item--input">vancouver</h4>
                <h5 className="bottom-list__item--label">preferred language</h5>
                <h4 className="bottom-list__item--input">english</h4>
                <h5 className="bottom-list__item--label">special requirements</h5>
                <h4 className="bottom-list__item--input">hearing aid</h4>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Profile;
