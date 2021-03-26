import React from 'react'
import Navbar from '../Navbar/Navbar';
import './HomePage.scss';
import locationIcon from '../../assets/icons/location-icon.svg';
import patientIcon from '../../assets/icons/patients-icon.svg';
import experienceIcon from '../../assets/icons/experience-icon.svg';
import ratingIcon from '../../assets/icons/rating-icon.svg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

function HomePage() {
  return (
    <div>
      <main className="home">
        <h1 className="home__heading">Home</h1>
        <Carousel responsive={responsive}>
          <article>
            <div className="home__image">
              <h3 className="home__doctor-name">Dr. Kathryn J. Atkinson</h3>
              <div className="home__languages">
                <span className="home__languages__item">ENGLISH</span>
                <span className="home__languages__item">SPANISH</span>
              </div>
            </div>
            <div className="home__bio">
              <p className="home__specialty">Peridontist</p>
              <div className="home__location">
                <img src={locationIcon}/>
                <div className="home__location__text">
                  <span className="home__location__text--line">Toronto, ON</span>
                  <span className="home__location__text--line">8 kilometers away</span>
                </div>
              </div>
              <div className="home__little-cards">
                <div className="home__little-cards__item">
                  <p className="home__little-cards__text">Patients</p>
                  <p className="home__little-cards__value"><img src={patientIcon} />520+</p>
                </div>
                <div className="home__little-cards__item">
                  <p className="home__little-cards__text">Experience</p>
                  <p className="home__little-cards__value"><img src={experienceIcon} />8 years+</p>
                </div>
                <div className="home__little-cards__item">
                  <p className="home__little-cards__text">Rating</p>
                  <p className="home__little-cards__value"><img src={ratingIcon} />4.0</p>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="home__image">
              <h3 className="home__doctor-name">Dr. Kathryn J. Atkinson</h3>
              <div className="home__languages">
                <span className="home__languages__item">ENGLISH</span>
                <span className="home__languages__item">SPANISH</span>
              </div>
            </div>
            <div className="home__bio">
              <p className="home__specialty">Peridontist</p>
              <div className="home__location">
                <img src={locationIcon}/>
                <div className="home__location__text">
                  <span className="home__location__text--line">Toronto, ON</span>
                  <span className="home__location__text--line">8 kilometers away</span>
                </div>
              </div>
              <div className="home__little-cards">
                <div className="home__little-cards__item">
                  <p className="home__little-cards__text">Patients</p>
                  <p className="home__little-cards__value"><img src={patientIcon} />520+</p>
                </div>
                <div className="home__little-cards__item">
                  <p className="home__little-cards__text">Experience</p>
                  <p className="home__little-cards__value"><img src={experienceIcon} />8 years+</p>
                </div>
                <div className="home__little-cards__item">
                  <p className="home__little-cards__text">Rating</p>
                  <p className="home__little-cards__value"><img src={ratingIcon} />4.0</p>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="home__image">
              <h3 className="home__doctor-name">Dr. Kathryn J. Atkinson</h3>
              <div className="home__languages">
                <span className="home__languages__item">ENGLISH</span>
                <span className="home__languages__item">SPANISH</span>
              </div>
            </div>
            <div className="home__bio">
              <p className="home__specialty">Peridontist</p>
              <div className="home__location">
                <img src={locationIcon}/>
                <div className="home__location__text">
                  <span className="home__location__text--line">Toronto, ON</span>
                  <span className="home__location__text--line">8 kilometers away</span>
                </div>
              </div>
              <div className="home__little-cards">
                <div className="home__little-cards__item">
                  <p className="home__little-cards__text">Patients</p>
                  <p className="home__little-cards__value"><img src={patientIcon} />520+</p>
                </div>
                <div className="home__little-cards__item">
                  <p className="home__little-cards__text">Experience</p>
                  <p className="home__little-cards__value"><img src={experienceIcon} />8 years+</p>
                </div>
                <div className="home__little-cards__item">
                  <p className="home__little-cards__text">Rating</p>
                  <p className="home__little-cards__value"><img src={ratingIcon} />4.0</p>
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
