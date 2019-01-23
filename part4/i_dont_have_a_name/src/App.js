import React, { Component } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter,Route ,Switch} from 'react-router-dom'
import Home from './components/home';
import About from './components/about';
import ContactPage from './components/contact';
import Posts from './components/post';




class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/:post_id' component={Posts}/>
          </Switch>
          </div>
        </BrowserRouter>
     
    );
  }
}

export default App;
