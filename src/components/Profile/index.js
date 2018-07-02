// src/components/Profile/index.js
import React from 'react'
import './profile.css'
import unsplash from '../../unsplash'
import 'bootstrap/dist/css/bootstrap.min.css'

class Profile extends React.Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.getProfile()
  }
  getProfile = () =>
    unsplash.currentUser
      .profile()
      .then(response => response.json())
      .then(currentUser => {
        console.log(currentUser)
        this.setState({ currentUser })
      })
      .catch(error => console.log('Error fetching and parsing data', error))

  render() {
    const { currentUser } = this.state
    return currentUser ? (
      <React.Fragment>
        <div className="userInfo">
          <div className="username">
            <h1>
              {currentUser.first_name}{' '}
              <small className="text-muted">{currentUser.last_name}</small>
            </h1>
            <button type="button" class="edit btn btn-outline-secondary">
              Edit profile
            </button>
          </div>

          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              ...
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Account settings
              </a>
              <a class="dropdown-item" href="#">
                Submit a photo
              </a>
              <a class="dropdown-item" href="#">
                Manage photos
              </a>
              <a class="dropdown-item" href="#">
                My Stats
              </a>
              <a class="dropdown-item" href="#">
                Contact us
              </a>
              <a class="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </div>

          <div className="profileDesc">
            Download free, beautiful high-quality photos curated by{' '}
            {currentUser.first_name}.
          </div>
        </div>

        <div>
          <img
            src={currentUser.profile_image.large}
            alt="Profile"
            className="profilePic"
          />
        </div>

        {currentUser.photos.map(photo => (
          <img
            src={photo}
            key={photo.id}
            alt={photo.description}
            className="userImages float-left"
          />
        ))}
      </React.Fragment>
    ) : (
      <div>No profile</div>
    )
  }
}

export default Profile
