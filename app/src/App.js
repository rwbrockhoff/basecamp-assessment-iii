import React, { Component } from 'react';
import './App.css';




class App extends Component {
  
  constructor() {
    super();
    this.state = {title:  "INTENTION"};
    
  }

  render() {
    
    setTimeout(() => {
      this.setState({title: "ABSICHT"});
    }, 2000)
  
    return (
      <div className="App">
        <header className="App-header">
           <h1>{this.state.title}</h1>
          
              <p className="bubbleIcon">  überdenken </p>
              
             
         </header>
      <div className = "border"> </div>
          <div className ="bodyExplanation"> 
            <h2> Importing Additional Resources  </h2>
            <p> I'm sure we'll delve into properly importing various features to create amazing apps through React. I'm happy to learn more efficient or standardized methods of invoking these styles! </p>
          </div>   

          <div className ="celebrationStartsNow"> 
            <h3>We made it to the end of Basecamp! Bring on the Bootcamp.</h3>
          </div>

          <div className ="bodyBar">
               <h2> CODING FOR LIFE BEGINS NOW. </h2>
          </div>
        <center>
          <div className ="keyComponents"> 
            <p>Ask Questions</p>
          </div>

          <div className ="keyComponents"> 
            <p>Study Answers</p>
          </div>

          <div className ="keyComponents"> 
            <p>Ask More Questions</p>
          </div>
          </center>
          
      </div>
    );
  }
}

export default App;
