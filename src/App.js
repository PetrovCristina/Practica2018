import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Profile from './components/Profile';
import Feed from './components/Feed';
import AuthCallBack from './AuthCallBack.js';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/auth/callback" component={AuthCallBack}/>
          <Route exact path="/" component={Feed}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
    );
  }
}

export default App;
