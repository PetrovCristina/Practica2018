import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Pagination>
          <PaginationItem disabled>
            <PaginationLink previous href="../PhotoList/index.js" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="../PhotoList/index.js" />
          </PaginationItem>
        </Pagination>
      </React.Fragment>
    )
  }
}

export default Example
