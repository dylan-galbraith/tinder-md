import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <img src="http://placehold.it/50x50" alt=""/>
      <h1>Tinder MD</h1>
      <form>
        <div>
          <input type="email" name="email" placeholder="username/email" required/>
          <input type="password" name="password" placeholder="password" required/>
          <input type="password" name="confirm-password" placeholder="password" required/>
        </div>
        <div>
          <Link to="/">Signup</Link>
        </div>
        <div>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </>
  )
}

export default Signup