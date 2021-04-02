import React, { Component } from "react";

import {
  
  NavLink
 
  
} from "react-router-dom";
//import App from "./game";

 
class Stuff extends Component {
  constructor(props) {
    super(props);
   
    this.state = {

      firstname:"",
      secondname:""
    };
  }
  render() {
    return (
     
      <div align="center">
         <h1 id="connect">CONNECT FOUR GAME</h1>
        <h2>Enter Player Details</h2>
        
        
          <h3>Player 1 Name:</h3>
          <input id="input" type="text" onChange={this.setP1} name="firstname"  placeholder="Enter Player 1 Name" value={this.state.firstname}/><br/>
				
          <h3>Player 2 Name:</h3>
          <input id="input" onChange={this.setP2} name="secondname"  placeholder="Enter Player 2 Name" value={this.state.secondname}></input><br/>       
          <br/><NavLink to="/game" ><button onClick={this.call} className="button">Play</button></NavLink>
          
        
      </div>
   
    );
   
  }
  // call=()=>{

  //   alert("hi");
  //   <App firstname={this.state.firstname} secondname={this.state.secondname}/>

  // }
  setP1 = (ele) =>{
    //if(ele.target.name=="firstname"){
      this.setState({firstname:ele.target.value});
  }
  setP2 = (ele) =>{
    //if(ele.target.name=="firstname"){
      this.setState({secondname:ele.target.value});
  }
    	

  
}
 
export default Stuff;