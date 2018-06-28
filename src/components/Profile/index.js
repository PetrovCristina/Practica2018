// src/components/Profile/index.js
import React from 'react'
import './profile.css'
import unsplash from '../../unsplash'

class Profile extends React.Component {
  state = {
    profile: null
  }

  componentDidMount() {
    unsplash.currentUser
      .profile()
      .then(res => res.json())
      .then(json => this.setState({ profile: json }))
  }

  render() {
    const { profile } = this.state
    return profile ? (
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    ) : (
      <div>No profile</div>
    )
  }
}

export default Profile
