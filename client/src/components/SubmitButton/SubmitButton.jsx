import { Link } from 'react-router-dom';
import "./SubmitButton.scss";

function SubmitButton(props) {
  return (
    <Link to={props.link} className="next-button">Submit</Link>
  )
}

export default SubmitButton
