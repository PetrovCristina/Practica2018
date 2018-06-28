// src/components/Profile/index.js
import React from 'react'
import './profile.css'
import unsplash from '../../unsplash'
class Profile extends React.Component {
  state = {
    profile: null
  }

  componentDidMount() {
    this.getProfile()
  }
  getProfile = () =>
    unsplash.users
      .profile('rawpixel')
      .then(response => response.json())
      .then(profile => {
        console.log(profile)
        this.props.match.params.username
      })
      .catch(error => console.log('Error fetching and parsing data', error))

  render() {
    const { profile } = this.state
    return profile ? <div>hello</div> : <div>No profile</div>
  }
}

export default Profile
