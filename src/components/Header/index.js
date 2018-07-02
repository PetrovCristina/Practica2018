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
  Container
} from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import unsplash from '../../unsplash'
import logo from './logo.png'

const authenticationUrl = unsplash.auth.getAuthenticationUrl(['public'])

class Header extends React.Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand tag={Link} to="/">
              <img src={logo} alt="Logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/profile/">
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={authenticationUrl}>Sign In</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state.token
  }
}

export default connect(mapStateToProps)(Header)
