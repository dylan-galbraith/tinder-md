import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import HomePage from "./components/HomePage/HomePage";
import Chat from "./components/Chat/Chat";
import Profile from "./components/Profile/Profile";
import ConfigLanguage from "./components/ConfigLanguage/ConfigLanguage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} /> } />
          <Route path="/signup" component={Signup}/>
          <Route path="/config-1-language" component={ConfigLanguage}/>
          <Route path="/config-2-name" component={ConfigLanguage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
