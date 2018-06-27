// src/components/Header/index.js
import React from "react";
import "./Header.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {

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

        <Link to="/login">
        <button onClick={this.logout} className="navigation button logout">Log Out</button>
        </Link>

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
