import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


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
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
