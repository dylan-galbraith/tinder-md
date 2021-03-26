import { Link } from 'react-router-dom';
import "./NextButton.scss";

function NextButton(props) {
  return (
    <Link to={props.link} className="next-button">Next</Link>
  )
}

export default NextButton
