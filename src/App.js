import React, { Component } from 'react';

import './App.css';
import Calender from './Components/calender';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="App">
      <h1>Report View</h1>
        <div className = 'calender'>
          <h5>Select you Date</h5>
           <Calender data = {this.state.data}/>
        </div>
            
        
      </div>
    );
  }
}

export default App;
