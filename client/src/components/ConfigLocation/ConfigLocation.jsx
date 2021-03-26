import "./ConfigLocation.scss";
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";
import Setup from "../Setup/Setup";
import micIcon from '../../assets/icons/mic-icon.svg';

function ConfigLocation() {
  return (
    <div>

      <Setup progressFill="progress__inner--60"/>
      <main className="config-location">
        <div className="config-location__section">
          <h2 className="config-location__heading" >I Currently Live In (Country):</h2>
          <form className="config-location__form">
            <input className="config-location__input" placeholder="Country"/>
            <img src={micIcon} />
          </form>
        </div>
        <div className="config-location__section">
          <h2 className="config-location__heading">I Currently Live In (City):</h2>
          <form className="config-location__form">
            <input className="config-location__input" placeholder="City" />
            <img src={micIcon} />
          </form>
        </div>
        <div className="config-location__geo">
          <div>
            <h2>Enable Geo-Location Services:</h2>
            <p>This helps us match you with doctors in close proximity to you.</p>
          </div>
          <input type="radio" />
        </div>
      </main>
      
      <BackButton link="/config-2-gender"/>
      <NextButton link="/config-5-final" />
    </div>
  )
}

export default ConfigLocation;
