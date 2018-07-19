import React from 'react'
import unsplash from '../../unsplash'
import 'bootstrap/dist/css/bootstrap.min.css'
import './search.css'
import { Button } from 'reactstrap'
import Toggle from 'react-toggled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class Search extends React.Component {
  state = {
    search: null
  }

  componentDidMount() {
    this.getSearch()
  }
  getSearch = () =>
    unsplash.search
      .photos('dogs', 1)
      .then(response => response.json())
      .then(search => {
        console.log(search)
        this.setState({ search })
      })
      .catch(error => console.log('Error fetching and parsing data', error))

  render() {
    const { search } = this.state
    return search ? (
      <React.Fragment>
        {search.results.map(photo => (
          <div className="hovereffect" key={photo.id}>
            <ul key={photo.id}>
              <li>
                <img
                  src={photo.urls.small}
                  key={photo.id}
                  alt={photo.description}
                  className="userImages float-left"
                />
              </li>
            </ul>
            <div className="overlay1 overlay">
              <Toggle>
                {({ on, getTogglerProps }) => (
                  <Button {...getTogglerProps()} className="button-like heart">
                    {on ? 'Liked!:)' : <FontAwesomeIcon icon="heart" />}
                  </Button>
                )}
              </Toggle>
              <div className="input-group plus-minus-input">
                <div className="input-group-button collect">
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
              <Button className="download">
                <FontAwesomeIcon icon="download" />
              </Button>
              <div className="userPic">
                <Link to="/">
                  <img
                    src={photo.user.profile_image.small}
                    alt={photo.user.bio}
                  />
                  <p>{photo.user.name}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    ) : (
      <div>Loading...</div>
    )
  }
}

export default Search
