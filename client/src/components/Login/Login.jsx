import { Link } from "react-router-dom";
import "./Login.scss";
import Logo from "../../assets/connect-md-logo.png";

function Login(props) {

  const goHome = () => {
    props.history.push("/");
  }

  return (
    <div className="logo">
      <div className="logo__container">
        <img className="logo__avatar" src={Logo} alt=""/>
        <h3 className="logo__title">by Google</h3>
      </div>
      <form className="form">
        <div className="form__box">
          <input className="form__box--email" type="email" name="email" placeholder="username" required/>
          <input className="form__box--pw" type="password" name="password" placeholder="password" required/>
          <Link to="/home" className="form__box--tag">Forgot Password?</Link>
        </div>
        <button onClick={goHome} className="form__button">Sign in with Google Account</button>
      </form>
      <div className="logo__bottom">
        Don't have an account? <span className="logo__bottom--link"><Link to="/config-0-welcome">Create One</Link></span>
      </div>
    </div>
  )
}

export default Login
