import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Toggle from 'react-toggled'
import { Link } from 'react-router-dom'
import React from 'react'

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
          <ModalBody>
            <img src={photo.urls.full} alt={photo.description} />
          </ModalBody>
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
        <Link to={`/profile/${photo.user.username}`}>
          <img src={photo.user.profile_image.small} alt={photo.user.bio} />
          <p>{photo.user.name}</p>
        </Link>
      </div>
    </div>
  </div>
)

export default ListItem
