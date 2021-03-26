import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <img src="http://placehold.it/50x50" alt=""/>
      <h1>Tinder MD</h1>
      <form>
        <div>
          <input type="email" name="email" placeholder="username/email" required/>
          <input type="password" name="password" placeholder="password" required/>
          <a href="#">Forgot Password?</a>
        </div>
        <Link to="/">Login</Link>
      </form>
      <span>
        Don't have an account? <Link to="/signup">Create One</Link>
      </span>
    </>
  )
}

export default Login
