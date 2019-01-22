import React, { Component } from 'react';
import Todos from './todos';

class App extends Component {
state={
  todos:[
    {id:1,content:'I need to buy milk'},
    {id:2,content:'I need to wash cloths'}
  ]
}


  render() {
    return (
      <div className="App">
       <Todos todos={this.Todos} />
      </div>
    );
  }
}

export default App;
