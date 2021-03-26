import { Link } from "react-router-dom";
import "./Login.scss";

function Login(props) {

  const goHome = () => {
    props.history.push("/");
  }

  return (
    <div className="logo">
      <img className="logo__avatar" src="http://placehold.it/50x50" alt=""/>
      <h3 className="logo__title">Match MD by Google</h3>
      <form className="form">
        <div className="form__box">
          <input className="form__box--email" type="email" name="email" placeholder="username" required/>
          <input className="form__box--pw" type="password" name="password" placeholder="password" required/>
          <Link to="/home" className="form__box--tag">Forgot Password?</Link>
        </div>
        <button onClick={goHome} className="form__button">Sign in with Google Account</button>
      </form>
      <div className="logo__bottom">
        Don't have an account? <span className="logo__bottom--link"><Link to="/signup">Create One</Link></span>
      </div>
    </div>
  )
}

export default Login
