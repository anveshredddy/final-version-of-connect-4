import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  // import Home from "./Home";
  import player from "./player";
  import App from "./game";
  import Welcome from './welcome';
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
        <ul class="display">
          <li><NavLink exact to="/">Welcome</NavLink></li>
          {/* <li><NavLink exact to="/Home">Home</NavLink></li> */}
            <li><NavLink to="/player">Get Started</NavLink></li>
            
          </ul>
         
          
          <div className="content">
            <Route exact path="/" component={Welcome}/>
            {/* <Route exact path="/Home" component={Home}/> */}
            <Route path="/player" component={player}/>
            <Route path="/game" component={App}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;