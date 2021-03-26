import ProgressBar from "../ProgressBar/ProgressBar";
import "./Setup.scss";

function Setup() {
  return (
    <div className="setup">
      <div className="setup__inner-container">
        <h2 className="setup__title">Set Up</h2>
        <ProgressBar class={"progress__inner--20"} />
      </div>
    </div>
  )
}

export default Setup
