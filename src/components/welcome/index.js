import React, { Component } from "react";
import "./welcome.css";
import { Link } from 'react-router-dom';

export default class Login extends Component {
  login() {
    window.FB.login(function (response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function (response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }
  render() {
    return (
      <Link to="/">
      <button onClick={this.login} className="loginBtn loginBtn--facebook">Log In</button>
      </Link>
    );
  }
}
