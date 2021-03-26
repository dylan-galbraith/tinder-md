import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import PostSignup from "./components/PostSignup/PostSignup";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <h1>Home Page</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} /> } />
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/post-signup">
            <PostSignup />
          </Route>
        </Switch>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
