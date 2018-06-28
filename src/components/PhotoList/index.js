import React from 'react'
import unsplash from '../../unsplash'

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
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.urls.thumb} alt={photo.description} />
          </li>
        ))}
      </ul>
    ) : (
      <div>Loading...</div>
    )
  }
}

export default PhotoList
