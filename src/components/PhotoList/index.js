import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import ListItem from './ListItem.js'

class PhotoList extends React.Component {
  componentDidMount() {
    this.props.getPhotos()
  }

  render() {
    return (
      <InfiniteScroll
        dataLength={this.props.photos.length}
        next={this.props.getPhotos}
        hasMore={this.props.hasMore}
        loader={<h4>Loading...</h4>}>
        {this.props.photos.map(photo => (
          <ListItem key={photo.id} photo={photo} />
        ))}
      </InfiniteScroll>
    )
  }
}

export default PhotoList
