import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./sites/home";
import Login from "./sites/login";
import SignUp from "./sites/signup";
import './App.css';

function App() {
  return(
      <Router>
        <div>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/login'} component={Login}/>
          <Route exact path={'/signup'} component={SignUp}/>
        </div>
      </Router>
  );
}

export default App;
