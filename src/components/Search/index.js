import React from 'react'
import unsplash from '../../unsplash'
import 'bootstrap/dist/css/bootstrap.min.css'
import './search.css'

class Search extends React.Component {
  state = {
    search: null
  }

  componentDidMount() {
    this.getSearch()
  }
  getSearch = () =>
    unsplash.search
      .photos('dogs', 1)
      .then(response => response.json())
      .then(search => {
        console.log(search)
        this.setState({ search })
      })
      .catch(error => console.log('Error fetching and parsing data', error))

  render() {
    const { search } = this.state
    return search ? (
      <React.Fragment>
        {search.results.map(photo => (
          <ul key={photo.id}>
            <li>
              <img
                src={photo.urls.small}
                key={photo.id}
                alt={photo.description}
                className="userImages float-left"
              />
            </li>
          </ul>
        ))}
      </React.Fragment>
    ) : (
      <div>Loading...</div>
    )
  }
}

export default Search
