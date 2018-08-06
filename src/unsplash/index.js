import Unsplash from 'unsplash-js'
import { mock } from './mock'
import listPhotosMock from './listPhotos'
import profileMock from './profile'
const bearerToken = localStorage.getItem('access_token')

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_ID,
  secret: process.env.REACT_APP_UNSPLASH_SECRET,
  callbackUrl: 'http://localhost:3000/auth/callback',
  bearerToken
})

mock(unsplash, 'photos.listPhotos', listPhotosMock)
mock(unsplash, 'currentUser.profile', profileMock)

export default unsplash
