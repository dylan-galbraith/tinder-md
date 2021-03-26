import { Link } from 'react-router-dom';
import "./BackButton.scss";

function BackButton(props) {
  return (
    <Link to={props.link} className="back-button">back</Link>
  )
}

export default BackButton
