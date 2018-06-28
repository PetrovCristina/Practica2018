import React from 'react'
import unsplash from '../../unsplash'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Example from '../Pagination'

class PhotoList extends React.Component {
  state = {
    photos: null
  }

  componentDidMount() {
    this.getPhotos()
  }
  getPhotos = () =>
    unsplash.photos
      .listPhotos(1, 15, 'latest')
      .then(response => response.json())
      .then(photos => {
        console.log(photos)
        this.setState({ photos })
      })
      .catch(error => console.log('Error fetching and parsing data', error))

  render() {
    const { photos } = this.state
    return photos ? (
      <React.Fragment>
        <ul>
          {photos.map(photo => (
            <li key={photo.id}>
              <img
                class="img-thumbnail rounded float-left"
                src={photo.urls.small}
                alt={photo.description}
              />
            </li>
          ))}
        </ul>
        <Example />
      </React.Fragment>
    ) : (
      <div>Loading...</div>
    )
  }
}

export default PhotoList
