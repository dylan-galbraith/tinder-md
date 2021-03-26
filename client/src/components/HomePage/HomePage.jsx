import React from 'react'
import Navbar from '../Navbar/Navbar';
import './HomePage.scss';

import locationIcon from '../../assets/icons/location-icon.svg';
import patientIcon from '../../assets/icons/patients-icon.svg';
import experienceIcon from '../../assets/icons/experience-icon.svg';
import ratingIcon from '../../assets/icons/rating-icon.svg';
import greenSaveIcon from '../../assets/icons/green-save-icon.svg';
import greenSaveIconFilled from '../../assets/icons/green-save-icon-filled.svg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function saveHandler(e) {
  e.target.src = greenSaveIconFilled;
}

function HomePage() {
  return (
    <div>
      <main className="home">
        <h1 className="home__heading">Physicians</h1>
        <Carousel responsive={responsive}>
          <article className="home__card">
            <div className="home__image doctor__1">
              <div className="home__image--overlay">
              </div>
              <div className="home__image--text">
                  <h3 className="home__doctor-name">Dr. Kathryn J. Atkinson</h3>
                  <div className="home__languages">
                    <span className="home__languages__item">ENGLISH</span>
                    <span className="home__languages__item">SPANISH</span>
                  </div>
                </div>
            </div>
            <div className="home__bio">
              <img onClick={saveHandler} src={greenSaveIcon} className="home__save-icon" />
              <p className="home__specialty">Allergy/Imunology</p>
              <div className="home__location">
                <img className="home__location__icon" src={locationIcon}/>
                <div className="home__location__text">
                  <span className="home__location__text--line">Toronto, ON</span>
                  <span className="home__location__text--line">8 kilometers away</span>
                </div>
              </div>
              <p className="home__bio__text">Dr. Atkinson specializes in treating and managing allergies, asthma, and immunological disorders.</p>
              <div className="home__little-cards">
                <div className="home__little-cards__item home__little-cards__item--1">
                  <p className="home__little-cards__text">Patients</p>
                  <p className="home__little-cards__value"><img className="home__little-cards__icon" src={patientIcon} />520+</p>
                </div>
                <div className="home__little-cards__item home__little-cards__item--2">
                  <p className="home__little-cards__text">Experience</p>
                  <p className="home__little-cards__value"><img className="home__little-cards__icon" src={experienceIcon} />8 years+</p>
                </div>
                <div className="home__little-cards__item home__little-cards__item--3">
                  <p className="home__little-cards__text">Rating</p>
                  <p className="home__little-cards__value"><img className="home__little-cards__icon" src={ratingIcon} />4.0</p>
                </div>
              </div>
            </div>
          </article>
          <article className="home__card">
            <div className="home__image doctor__2">
              <div className="home__image--overlay">
              </div>
              <div className="home__image--text">
                  <h3 className="home__doctor-name">Dr. Bilal Ayach</h3>
                  <div className="home__languages">
                    <span className="home__languages__item">ENGLISH</span>
                    <span className="home__languages__item">HINDI</span>
                  </div>
                </div>
            </div>
            <div className="home__bio">
              <img onClick={saveHandler} src={greenSaveIcon} className="home__save-icon" />
              <p className="home__specialty">Cardiology</p>
              <div className="home__location">
                <img className="home__location__icon" src={locationIcon}/>
                <div className="home__location__text">
                  <span className="home__location__text--line">Toronto, ON</span>
                  <span className="home__location__text--line">10 kilometers away</span>
                </div>
              </div>
              <p className="home__bio__text">Dr. Ayach specializes in treating heart attacks, heart failures, heart valve disease, arrhythmia, and high blood pressure.</p>
              <div className="home__little-cards">
                <div className="home__little-cards__item home__little-cards__item--1">
                  <p className="home__little-cards__text">Patients</p>
                  <p className="home__little-cards__value"><img className="home__little-cards__icon" src={patientIcon} />820+</p>
                </div>
                <div className="home__little-cards__item home__little-cards__item--2">
                  <p className="home__little-cards__text">Experience</p>
                  <p className="home__little-cards__value"><img className="home__little-cards__icon" src={experienceIcon} />10 years+</p>
                </div>
                <div className="home__little-cards__item home__little-cards__item--3">
                  <p className="home__little-cards__text">Rating</p>
                  <p className="home__little-cards__value"><img className="home__little-cards__icon" src={ratingIcon} />4.1</p>
                </div>
              </div>
            </div>
          </article>
          <article className="home__card">
            <div className="home__image doctor__3">
              <div className="home__image--overlay">
              </div>
              <div className="home__image--text">
                  <h3 className="home__doctor-name">Dr. Jeanie Choi Chen</h3>
                  <div className="home__languages">
                    <span className="home__languages__item">ENGLISH</span>
                    <span className="home__languages__item">CANTONESE</span>
                  </div>
                </div>
            </div>
            <div className="home__bio">
              <img onClick={saveHandler} src={greenSaveIcon} className="home__save-icon" />
              <p className="home__specialty">Family Doctor</p>
              <div className="home__location">
                <img className="home__location__icon" src={locationIcon}/>
                <div className="home__location__text">
                  <span className="home__location__text--line">Toronto, ON</span>
                  <span className="home__location__text--line">12 kilometers away</span>
                </div>
              </div>
              <p className="home__bio__text">Dr. Chen specializes in identifying and treating diseases and injuries and addressing the prevention of health risks</p>
              <div className="home__little-cards">
                <div className="home__little-cards__item home__little-cards__item--1">
                  <p className="home__little-cards__text">Patients</p>
                  <p className="home__little-cards__value"><img className="home__little-cards__icon" src={patientIcon} />240+</p>
                </div>
                <div className="home__little-cards__item home__little-cards__item--2">
                  <p className="home__little-cards__text">Experience</p>
                  <p className="home__little-cards__value"><img className="home__little-cards__icon" src={experienceIcon} />6 years+</p>
                </div>
                <div className="home__little-cards__item home__little-cards__item--3">
                  <p className="home__little-cards__text">Rating</p>
                  <p className="home__little-cards__value"><img className="home__little-cards__icon" src={ratingIcon} />4.3</p>
                </div>
              </div>
            </div>
          </article>
        </Carousel>
      </main>
      <Navbar />
    </div>
  )
}

export default HomePage;
