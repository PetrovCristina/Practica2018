import React from 'react'
import unsplash from '../../unsplash'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Infinite from 'react-infinite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const ListItem = ({ photo }) => (
  <div className="hovereffect" key={photo.id}>
    <ul>
      <li>
        <img
          className="img-thumbnail rounded float-left"
          src={photo.urls.small}
          alt={photo.description}
        />
      </li>
    </ul>
    <div className="overlay1 overlay">
      <Button className="button-like heart">
        <FontAwesomeIcon icon="heart" />
      </Button>
      <div className="input-group plus-minus-input">
        <div className="input-group-button collect">
          <Button
            type="button"
            className="button square "
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
          <img src={photo.user.profile_image.small} alt={photo.user.bio} />
          <p>{photo.user.name}</p>
        </Link>
      </div>
    </div>
  </div>
)

class PhotoList extends React.Component {
  state = {
    photos: [],
    isInfiniteLoading: false,
    page: 1
  }

  componentDidMount() {
    this.getPhotos(this.state.page)
  }

  handleInfiniteLoad = () => {
    this.setState({
      isInfiniteLoading: true
    })
    this.getPhotos(this.state.page)
    setTimeout(() => {
      // this.getPhotos(this.state.page)
    }, 2500)
  }

  elementInfiniteLoad() {
    return <div className="infinite-list-item">Loading...</div>
  }

  getPhotos = page =>
    unsplash.photos
      .listPhotos(page)
      .then(response => response.json())
      .then(newPhotos => {
        this.setState(({ photos, page }) => ({
          photos: [...photos, ...newPhotos],
          isInfiniteLoading: false,
          page: page + 1
        }))
      })
      .catch(error => console.log('Error fetching and parsing data', error))

  render() {
    return (
      <Infinite
        elementHeight={634}
        useWindowAsScrollContainer
        onInfiniteLoad={this.handleInfiniteLoad}
        loadingSpinnerDelegate={this.elementInfiniteLoad()}
        isInfiniteLoading={this.state.isInfiniteLoading}>
        {this.state.photos.map(photo => (
          <ListItem key={photo.id} photo={photo} />
        ))}
      </Infinite>
    )
  }
}

export default PhotoList
