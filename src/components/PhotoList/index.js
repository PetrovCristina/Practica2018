import React from 'react'
import unsplash from '../../unsplash'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import Toggle from 'react-toggled'
import Gallery from 'react-grid-gallery'

const IMAGES = ({ photo }) => [
  {
    src: photo.urls.full,
    caption: photo.description
  }
]

const ListItem = ({ photo }) => (
  <div className="hovereffect" key={photo.id}>
    <ul>
      <li>
        <img
          onClick={this.toggle}
          className="img-thumbnail rounded float-left"
          src={photo.urls.small}
          alt={photo.description}
        />
        <Modal isOpen={this.state} toggle={this.toggle}>
          <ModalBody>kfldkgljdgkldjgk</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
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
        <Link to={photo.user.links.self}>
          <img src={photo.user.profile_image.small} alt={photo.user.bio} />
          <p>{photo.user.name}</p>
        </Link>
      </div>
    </div>
  </div>
)

class PhotoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      modal: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
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
        this.setState(({ photos, page, like, modal }) => ({
          photos: [...photos, ...newPhotos],
          isInfiniteLoading: false,
          page: page + 1,
          like: false,
          modal: false
        }))
      })
      .catch(error => console.log('Error fetching and parsing data', error))

  render() {
    ;<Gallery images={IMAGES} />
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
