import React, { Component } from 'react';
import Ninjas from './ninjas';


class App extends Component {
  state={
    ninjas:[
      {
      "age": 8,
      "name": "Dean",
      "belt": "Godfrey"
      },
      {
      "age": 5,
      "name": "Mitchell",
      "belt": "Cochran"
      },
      {
      "age": 3,
      "name": "Danny",
      "belt": "Washington"
      },
      {
      "age": 35,
      "name": "Jennifer",
      "belt": "Francis"
      },
      {
      "age": 27,
      "name": "Tiffany",
      "belt": "Fuller"
      }
      ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app :)</h1>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
