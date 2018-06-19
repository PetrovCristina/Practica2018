import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

function getHash(hash, key) {
 const params = hash
     .substr(1)
     .split('&')
     .map(param => param.split('='))
     .reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {})

 return params[key]
}

// Example
//console.log(getHash('#key1=the_value&key2=value2', 'key2'))

class AuthCallBack extends React.Component {
  componentDidMount() {
    const token = getHash(this.props.location.hash, "access_token")
    console.log(token)
  }
  render() {
    return <Redirect to="/"/>
  }
}

export default AuthCallBack;
