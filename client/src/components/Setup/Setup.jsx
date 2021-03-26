import ProgressBar from "../ProgressBar/ProgressBar";
import "./Setup.scss";

function Setup(props) {
  return (
    <div className="setup">
      <div className="setup__inner-container">
        <h2 className="setup__title">Set Up</h2>
        <ProgressBar class={props.progressFill} />
      </div>
    </div>
  )
}

export default Setup
