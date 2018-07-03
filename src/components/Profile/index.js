// src/components/Profile/index.js
import React from 'react'
import './profile.css'
import './buttons.css'
import './hover.css'
import unsplash from '../../unsplash'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
} from 'reactstrap'
import sorry from './sorry.jpg'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <Row>
          <Col xs="auto">
            <img
              src={currentUser.profile_image.large}
              alt="Profile"
              className="profilePic"
            />
          </Col>
          <Col>
            <div className="username">
              <h1>
                {currentUser.first_name} {currentUser.last_name}
              </h1>
              <button type="button" className="edit btn btn-outline-secondary">
                Edit profile
              </button>
            </div>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle color="white">...</DropdownToggle>
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
          </Col>
        </Row>

        <div className="position">
          <Row>
            <Col>
              {currentUser.photos.map(photo => (
                <div className="hovereffect" key={photo.id}>
                  <img
                    src={photo.urls.small}
                    key={photo.id}
                    alt={photo.description}
                    className="userImages float-left"
                  />
                  <div className="overlay">
                    <button className="button button-like">
                      <FontAwesomeIcon icon="heart" />
                    </button>
                    <div className="input-group plus-minus-input">
                      <div className="input-group-button">
                        <button
                          type="button"
                          className="button square"
                          data-quantity="plus"
                          data-field="quantity">
                          <FontAwesomeIcon icon="plus" />
                          <span>Collect</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </div>

        <div className="mainPage">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <p>Make something awesome</p>
        </div>
      </React.Fragment>
    ) : (
      <div>
        <img src={sorry} alt="Sorry" />
      </div>
    )
  }
}

export default Profile
