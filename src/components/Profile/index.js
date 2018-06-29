// src/components/Profile/index.js
import React from 'react'
import './profile.css'
import unsplash from '../../unsplash'
import User from '../User'

class Profile extends React.Component {
  state = {
    profile: null
  }

  componentDidMount() {
    this.getProfile()
  }
  getProfile = () =>
    unsplash.users
      .profile(this.props.match.params.username)
      .then(response => response.json())
      .then(profile => {
        console.log(profile)
        this.setState({ profile })
      })
      .catch(error => console.log('Error fetching and parsing data', error))

  render() {
    const { profile } = this.state
    return profile ? <User /> : <div>No profile</div>
  }
}

export default Profile
