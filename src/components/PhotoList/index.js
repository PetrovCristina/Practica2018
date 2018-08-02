import React from 'react'
import unsplash from '../../unsplash'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import ListItem from './const.js'

const IMAGES = ({ photo }) => [
  {
    src: photo.urls.full,
    caption: photo.description
  }
]

class PhotoList extends React.Component {
  state = {
    photos: [],
    page: 0,
    hasMore: true
  }

  componentDidMount() {
    this.getPhotos()
  }

  getPhotos = () => {
    if (this.state.photos.length > 100) {
      this.setState({ hasMore: false })
      return
    }

    unsplash.photos
      .listPhotos(this.state.page)
      .then(response => response.json())
      .then(newPhotos => {
        this.setState(({ photos, page }) => ({
          photos: [...photos, ...newPhotos],
          page: page + 1
        }))
      })
      .catch(error => console.log('Error fetching and parsing data', error))
  }

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.photos.length}
        next={this.getPhotos}
        hasMore={this.state.hasMore}
        loader={<h4>Loading...</h4>}>
        {this.state.photos.map(photo => (
          <ListItem key={photo.id} photo={photo} />
        ))}
      </InfiniteScroll>
    )
  }
}

export default PhotoList
