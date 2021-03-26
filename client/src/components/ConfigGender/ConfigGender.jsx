import "./ConfigGender.scss";
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";
import Setup from "../Setup/Setup";

function ConfigGender() {
  return (
    <div>
      <Setup progressFill="progress__inner--40" />
      <main className="config-gender">
        <div className="config-gender__section">
          <h2 className="config-gender__heading">Biological Sex:</h2>
          <form className="config-gender__form">
            <label className="config-gender__label"><input name="sex" type="radio" /> Male</label>
            <label className="config-gender__label"><input name="sex" type="radio" /> Female</label>
            <label className="config-gender__label"><input name="sex" type="radio" /> Other</label>
          </form>
        </div>
        <div className="config-gender__section">
          <h2 className="config-gender__heading">I would prefer a doctor that is...</h2>
          <button className="config-gender__button">Male</button>
          <button className="config-gender__button">Female</button>
          <button className="config-gender__button">Does not matter</button>
        </div>
      </main>
      
      <BackButton link="/config-1-language"/>
      <NextButton link="/config-3-location" />
    </div>
  )
}

export default ConfigGender;
