import "./ConfigLanguage.scss";
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";
import Setup from "../Setup/Setup";
import ArrowIcon from "../../assets/icons/drop-arrow.svg";

function ConfigLanguage() {
  return (
    <div>
      <Setup progress={"progress__inner--20"} />
      <div className="languages">
        <img className="languages__arrow" src={ArrowIcon} alt="" />
        <label className="languages__title" htmlFor="languages">My preferred language is</label>
        <select className="languages__dropdown" name="languages" id="languages">
          <option value="english">My preferred language is</option>
          <option value="spanish">mi idioma preferido es</option>
          <option value="chinese">我首选的语言是</option>
          <option value="french">ma langue préférée est</option>
          <option value="hindi">मेरी पसंदीदा भाषा है</option>
        </select>

        <div className="form__input-container">
          <div className="form__container">
            <label className="languages__title" htmlFor="name">Full Legal Name: </label>
            <input className="form__input--name" className="form__input" type="text" name="name"/>
          </div>
          <div className="form__container">
            <label className="languages__title" htmlFor="birthday">Birthday: </label>
            <input className="form__input--date" className="form__input" type="date" name="date"/>
          </div>
          <div className="form__container">
            <label className="languages__title" htmlFor="accomodations">Medical Accommodations: </label>
            <input className="form__input--date" className="form__input" type="text" name="accomodations" />
            <p className="form__paragraph">If applicable*</p> 
          </div>
        </div>
      </div>
      
      <BackButton link="/config-0-welcome"/>
      <NextButton link="/config-2-gender" />
    </div>
  );
}

export default ConfigLanguage;
