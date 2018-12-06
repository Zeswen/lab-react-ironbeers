import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
    render() {
        return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/'/>
                <Route exact path='/'/>
            </Switch>
        </div>
        );
  }
}

export default App;
