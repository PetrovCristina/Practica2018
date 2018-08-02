import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './search.css'
import ListItem from '../PhotoList/ListItem.js'
import InfiniteScroll from 'react-infinite-scroll-component'

class Search extends React.Component {
  state = {
    search: null,
    photos: [],
    results: [],
    hasMore: true
  }

  render() {
    const { search } = this.state
    return search ? (
      <React.Fragment>
        <InfiniteScroll
          dataLength={this.state.photos.length}
          next={this.getPhotos}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}>
          {this.state.results.map(photo => (
            <ListItem key={photo.id} photo={photo}>
              <img
                src={this.state.results.urls.small}
                alt={this.state.photos.id}
              />
            </ListItem>
          ))}
        </InfiniteScroll>
      </React.Fragment>
    ) : (
      <div>Loading...</div>
    )
  }
}

export default Search
