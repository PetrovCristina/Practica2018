import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
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
    loading: true,
    items: Array.from({ length: 20 })
  }

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      })
    }, 1500)
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
            <Route path="/profile" component={Profile} />
            <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}>
              {this.state.items.map((i, index) => (
                <Route exact path="/" component={PhotoList} key={index} />
              ))}
            </InfiniteScroll>

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
