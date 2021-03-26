import "./ConfigLocation.scss";
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";
import Setup from "../Setup/Setup";

function ConfigLocation() {
  return (
    <div>
      <Setup />
      
      
      <BackButton link="/config-2-gender"/>
      <NextButton link="/config-5-final" />
    </div>
  )
}

export default ConfigLocation;
