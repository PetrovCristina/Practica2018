import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Pagination>
          <PaginationItem disabled>
            <PaginationLink previous href="/" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="/" />
          </PaginationItem>
        </Pagination>
      </React.Fragment>
    )
  }
}

export default Example
