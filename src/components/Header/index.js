// src/components/Header/index.js
import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
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
  logout() {
    window.FB.getLoginStatus(function (response) {
      if (response && response.status === 'connected') {
        window.FB.logout();
      }
      console.log('Good bye');
    });
  }
  render() {
    return (

      <nav className="Nav">
        <div className="Nav-menus">
          <Link to="/" >
            Instagram
                    {this.props.token}
          </Link>
        </div>
        <Link to="/profile" >
          <div className="Nav-profile" />
        </Link>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.logout}>Log Out</button>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.token
  };
};

export default connect(mapStateToProps)(Header)
