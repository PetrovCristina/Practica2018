import Unsplash from 'unsplash-js'
import { mock } from './mock'
import listPhotosMock from './listPhotos'
import profileMock from './profile'
const bearerToken = localStorage.getItem('access_token')

const unsplash = new Unsplash({
  applicationId:
    '0cbe349370b25b7f214019c30a139f997d13ac19c2980d4a571d6a957d0717a9',
  secret: '96467a8fb97cd53579b77260020d919ede231885e9942f820c3f675febf3413b',
  callbackUrl: 'http://localhost:3000/auth/callback',
  bearerToken
})

mock(unsplash, 'photos.listPhotos', listPhotosMock)
mock(unsplash, 'curretUser.profile', profileMock)

export default unsplash
