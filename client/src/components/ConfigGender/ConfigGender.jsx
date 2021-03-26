import "./ConfigGender.scss";
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";
import Setup from "../Setup/Setup";

function ConfigGender() {
  return (
    <div>
      <Setup progress={"progress__inner--40"} />
      
      
      <BackButton link="/config-1-language"/>
      <NextButton link="/config-3-location" />
    </div>
  )
}

export default ConfigGender;
