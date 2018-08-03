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
  Col,
  Button
} from 'reactstrap'
import sorry from './sorry.jpg'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Toggle from 'react-toggled'

class usersProfile extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    this.getProfile()
  }
  getProfile = () =>
    unsplash.users
      .profile()
      .then(response => response.json())
      .then(user => {
        console.log(user)
        this.setState({ user })
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
    const { user } = this.state
    return user ? (
      <React.Fragment>
        <Row>
          <Col xs="auto">
            <img
              src={user.profile_image.large}
              alt="Profile"
              className="profilePic"
            />
          </Col>
          <Col>
            <div className="username">
              <h1>
                {user.first_name} {user.last_name}
              </h1>
              <Button type="button" className="edit btn btn-outline-secondary">
                Follow
              </Button>
              <Button type="button" className="edit btn btn-outline-secondary">
                Message
              </Button>
            </div>
            <div className="profileDesc">
              Download free, beautiful high-quality photos curated by{' '}
              {user.first_name}.
            </div>
          </Col>
        </Row>

        <div className="position">
          <Row>
            <Col>
              {user.photos.map(photo => (
                <div className="hovereffect" key={photo.id}>
                  <img
                    src={photo.urls.small}
                    key={photo.id}
                    alt={photo.description}
                    className="userImages float-left"
                  />
                  <div className="overlay">
                    <Toggle>
                      {({ on, getTogglerProps }) => (
                        <Button
                          {...getTogglerProps()}
                          className="button button-like">
                          {on ? 'Liked!:)' : <FontAwesomeIcon icon="heart" />}
                        </Button>
                      )}
                    </Toggle>
                    <div className="input-group plus-minus-input">
                      <div className="input-group-button">
                        <Button
                          type="button"
                          className="button square"
                          data-quantity="plus"
                          data-field="quantity">
                          <FontAwesomeIcon icon="plus" />
                          <span>Collect</span>
                        </Button>
                      </div>
                    </div>
                    <Button className="download1">
                      <FontAwesomeIcon icon="download" />
                    </Button>
                    <div className="avatar">
                      <Link to="/profile/">
                        <img
                          src={user.profile_image.small}
                          alt="Profile"
                          className="pic"
                        />
                        <p>
                          {user.first_name} {user.last_name}
                        </p>
                      </Link>
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

export default usersProfile
