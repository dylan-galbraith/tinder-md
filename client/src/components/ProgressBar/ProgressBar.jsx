import "./ProgressBar.scss";

function ProgressBar(props) {
  return (
    <div className="progress">
      <div className={props.class}></div>
    </div>
  )
}

export default ProgressBar
