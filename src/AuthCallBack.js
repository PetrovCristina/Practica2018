import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveToken } from './actions'

import unsplash from './unsplash'

class AuthCallBack extends React.Component {
  componentDidMount() {
    const { location } = this.props
    const params = new URLSearchParams(location.search)
    const code = params.get('code')
    console.log(code)
    unsplash.auth
      .userAuthentication(code)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        localStorage.setItem('access_token', json.access_token)
        unsplash.auth.setBearerToken(json.access_token)
      })
  }
  render() {
    return <Redirect to="/" />
  }
}

const mapDispatch = {
  saveToken
}
export default connect(
  null,
  mapDispatch
)(AuthCallBack)
