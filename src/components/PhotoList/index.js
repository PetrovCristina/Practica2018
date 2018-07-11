import React from 'react'
import unsplash from '../../unsplash'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class PhotoList extends React.Component {
  state = {
    photos: null
  }

  componentDidMount() {
    this.getPhotos()
  }
  getPhotos = () =>
    unsplash.photos
      .listPhotos()
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
        <div className="position">
          <Row>
            <Col>
              {photos.map(photo => (
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
            </Col>
          </Row>
        </div>
      </React.Fragment>
    ) : (
      <div>Loading...</div>
    )
  }
}

export default PhotoList
