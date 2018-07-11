import React from 'react'
import unsplash from '../../unsplash'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

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
    photos: []
  }

  fetchMoreData = () => {
    if (this.state.photos.length >= 500) {
      this.setState({ hasMore: false })
      return
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        photos: this.state.photos.concat(Array.from({ length: 20 }))
      })
    }, 500)
  }
  componentDidMount() {
    this.getPhotos()
  }
  getPhotos = () =>
    unsplash.photos
      .listPhotos()
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
    const { photos } = this.state
    return (
      <InfiniteScroll
        dataLength={this.state.photos}
        next={this.fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}>
        {this.state.photos.map(photo => (
          <ListItem key={photo.id} photo={photo} />
        ))}
      </InfiniteScroll>
    )
  }
}

export default PhotoList
