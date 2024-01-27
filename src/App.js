/*import logo from './logo.svg';}*/
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pagesize=15;
  state = {
    progress:0
  }
  setProgress(progress){
    this.setState({progess:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
         
        setProgress={this.state.progress}
      />
 
          <Switch>
          <Route exact path="/"><News key="general" pageSize={this.pagesize} country="in" category="general" /></Route>
          <Route exact path="/business"><News key="business" pageSize={this.pagesize} country="in" category="business" /></Route>
          <Route exact path="/health"><News key="health" pageSize={this.pagesize} country="in" category="health" /></Route>
          <Route exact path="/general"><News key="general" pageSize={this.pagesize} country="in" category="general" /></Route>
          <Route exact path="/science"><News key="science" pageSize={this.pagesize} country="in" category="science" /></Route>
          <Route exact path="/sports"><News key="sports" pageSize={this.pagesize} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News key="technology" pageSize={this.pagesize} country="in" category="technology" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pagesize} country="in" category="entertainment"/></Route>      
        </Switch>
        </Router>
      </div>
    )
  }
}

