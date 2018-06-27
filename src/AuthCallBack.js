import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveToken } from './actions';

function getHash(hash, key) {
  const params = hash
    .substr(1)
    .split('&')
    .map(param => param.split('='))
    .reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {})

  return params[key]
}

class AuthCallBack extends React.Component {
  componentDidMount() {
    const token = getHash(this.props.location.hash, "access_token")
    this.props.saveToken(token)
  }
  render() {
    return <Redirect to="/" />
  }
}

const mapDispatch = {
  saveToken
}
export default connect(null, mapDispatch)(AuthCallBack);
