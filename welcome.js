// import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import React, { Component } from "react";
 
class Welcome extends Component {
  constructor(props) {
    super(props);
   
    this.state = {

    
    };
  }
  render() {
    return (
     
      <div >
           <h1 >WELCOME TO CONNECT FOUR GAME !</h1>
           <h2>Game Instructions:</h2>
        <p><ul>
            <li>Each player will have alternative turns one after the other.</li>
            <li>Each player will drop in one checker piece at a time. </li>
            <li>This will give you a chance to either build your row, or stop your opponent from getting four in a row.</li>
            <li>The game is over either when you or your friend reaches four in a row, or when all forty two slots are filled, ending in a stalemate.</li>
           
            </ul></p>
        
        
        
        
        
      </div>
   
    );
   
  }
  // call=()=>{

  //   alert("hi");
  //   <App firstname={this.state.firstname} secondname={this.state.secondname}/>

  // }
 
    	

  
}
 
export default Welcome;
