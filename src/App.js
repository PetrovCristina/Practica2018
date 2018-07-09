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
import Search from './components/Search'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHeart,
  faPlus,
  faSearch,
  faDownload
} from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faPlus, faSearch, faDownload)

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
            <Route path="/search" component={Search} />
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
