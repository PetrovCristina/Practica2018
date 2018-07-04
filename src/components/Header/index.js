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
import { Form, FormGroup, Input } from 'reactstrap'
import './Header.css'
import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

            <Form className="searchForm">
              <FormGroup>
                <div className="wrap">
                  <div className="search">
                    <Input
                      type="search"
                      name="search"
                      className="searchTerm"
                      placeholder="What are you looking for?"
                    />
                    <button className="searchButton" tag={Link} to="/search/">
                      <FontAwesomeIcon icon="search" />
                    </button>
                  </div>
                </div>
              </FormGroup>
            </Form>

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
