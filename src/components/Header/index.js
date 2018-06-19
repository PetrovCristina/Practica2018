// src/components/Header/index.js
 import React from "react";
 import "./Header.css";
 import {BrowserRouter, Link} from 'react-router-dom';
 import {connect} from 'react-redux';

 class Header extends React.Component{
     render(){
         return (

            <nav className="Nav">
              <div className="Nav-menus">
                  <Link to="/" >
                    Instagram
                    {this.props.token}
                  </Link>
                </div>
                <Link to="/profile" >
                    <div className="Nav-profile"/>
                  </Link>
                  <a href="https://api.instagram.com/oauth/authorize/?client_id=10010c57d22e425994817c8a8ce8751b&redirect_uri=http://localhost:3000/auth/callback&response_type=token" className="Sign-In">Sign In</a>
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
