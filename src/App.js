import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import unsplash from './unsplash'
import Header from './components/Header'
import Profile from './components/Profile'
import AuthCallBack from './AuthCallBack.js'
import PhotoList from './components/PhotoList'
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
    photos: [],
    loading: true,
    page: 1,
    hasMore: true
  }

  search = text => {
    console.log(text)
    unsplash.search
      .photos(text, 1)
      .then(response => response.json())
      .then(searchPhotos => {
        console.log(searchPhotos)
        this.setState({ photos: searchPhotos.results })
      })
      .catch(error => console.log('Error fetching and parsing data', error))
  }
  getPhotos = () => {
    if (this.state.photos.length > 100) {
      this.setState({ hasMore: false })
      return
    }
    unsplash.photos
      .listPhotos(this.state.page)
      .then(response => response.json(console.log(response)))
      .then(newPhotos => {
        console.log(newPhotos)
        this.setState(({ photos, page }) => ({
          photos: [...photos, ...newPhotos],
          page: page + 1
        }))
      })
      .catch(error => console.log('Error fetching and parsing data', error))
  }

  render() {
    return (
      <React.Fragment>
        <Header search={this.search} />
        <Container>
          <Switch>
            <Route exact path="/auth/callback" component={AuthCallBack} />
            <Route exact path="/profile" component={Profile} />

            <Route
              exact
              path="/"
              render={() => (
                <PhotoList
                  photos={this.state.photos}
                  hasMore={this.state.hasMore}
                  getPhotos={this.getPhotos}
                />
              )}
            />

            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </Container>
      </React.Fragment>
    )
  }
}

export default App
