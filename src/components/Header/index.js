// src/components/Header/index.js
import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  InputGroup,
  InputGroupAddon,
  Form,
  Input,
  Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import unsplash from '../../unsplash'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import debounce from 'lodash.debounce'

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'read_user',
  'read_photos',
])

class Header extends React.Component {
  state = {
    isOpen: false,
    text: ''
  }

  search = debounce(text => {
    this.props.search(text)
  }, 500)

  onChange = e => {
    this.setState({text: e.target.value})
    this.search(e.target.value)
  }

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

  manualSearch = () => this.props.search(this.state.text)

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/">
            <img src={logo} alt="Logo" />
          </NavbarBrand>
          <Form inline>
            <InputGroup>
              <Input type="search" name="search" value={this.state.text}
                onChange={this.onChange}
                placeholder="Search free high-resolution photos"
              />
              <InputGroupAddon addonType="append">
                <Button color="secondary" outline onClick={this.manualSearch}>
                  <FontAwesomeIcon icon="search" />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={authenticationUrl}>Sign In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header
