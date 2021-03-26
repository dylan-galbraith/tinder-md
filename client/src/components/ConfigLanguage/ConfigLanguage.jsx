import "./ConfigLanguage.scss";
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";
import Setup from "../Setup/Setup";

function ConfigLanguage() {
  return (
    <div>
      <Setup />
      <div className="content-1">
        <h2 className="content-1__title">My preferred language is</h2>
        <label htmlFor="languages">My preferred language is</label>
        <select name="languages" id="languages">
          <option value="english">My preferred language is</option>
          <option value="spanish">mi idioma preferido es</option>
          <option value="chinese">我首选的语言是</option>
          <option value="french">ma langue préférée est</option>
          <option value="hindi">मेरी पसंदीदा भाषा है</option>
        </select>

      <select name="languages" id="languages">
        <option value="english">My preferred language is</option>
        <option value="spanish">mi idioma preferido es</option>
        <option value="chinese">我首选的语言是</option>
        <option value="french">ma langue préférée est</option>
        <option value="hindi">मेरी पसंदीदा भाषा है</option>
      </select>

      <div className="form__input-container">
        <div className="form__name-container">
          <label htmlFor="name">Full Legal Name: </label>
          <input type="text" name="name"/>
        </div>
        <div className="form__birthday-container">
          <label htmlFor="birthday">Birthday: </label>
          <input type="date" name="date"/>
        </div>
        <div className="form__accommodations-container">
          <label htmlFor="accomodations">Medical Accommodations: </label>
          <input type="text" name="accomodations"/>
          <p>If applicable*</p> 
        </div>
      </div>
      </div>
      
      <BackButton link="/config-0-welcome"/>
      <NextButton link="/config-2-gender" />
    </div>
    // </div>
  );
}

export default ConfigLanguage;
