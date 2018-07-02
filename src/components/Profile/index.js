// src/components/Profile/index.js
import React from 'react'
import './profile.css'
import unsplash from '../../unsplash'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import sorry from './sorry.jpg'

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

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    const { currentUser } = this.state
    return currentUser ? (
      <React.Fragment>
        <div className="userInfo">
          <div className="username">
            <h1>
              {currentUser.first_name} {currentUser.last_name}
            </h1>
            <button type="button" className="edit btn btn-outline-secondary">
              Edit profile
            </button>
          </div>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>...</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Account settings</DropdownItem>
              <DropdownItem>Submit a photo</DropdownItem>
              <DropdownItem>Manage photos</DropdownItem>
              <DropdownItem>My Stats</DropdownItem>
              <DropdownItem>Contact us</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
      <div>
        <img src={sorry} alt="Sorry" />
      </div>
    )
  }
}

export default Profile
