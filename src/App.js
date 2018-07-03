import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import AuthCallBack from './AuthCallBack.js'
import { changeData } from './actions'
import Login from './components/welcome'
import PhotoList from './components/PhotoList'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faPlus)

class App extends Component {
  state = {
    results: [],
    loading: true
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/auth/callback" component={AuthCallBack} />
            <Route path="/login" exact component={Login} />
            <Route exact path="/" component={PhotoList} />
            <Route path="/profile" component={Profile} />
            {/*<Route path="/photo/:id" component={User} />*/}
          </Switch>
          {/* Footer */}
        </Container>
      </React.Fragment>
    )
  }
}

const mapDispatch = {
  changeData
}

export default connect(
  null,
  mapDispatch
)(App)
