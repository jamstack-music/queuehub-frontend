import React from 'react'
import uuidv4 from 'uuid/v4'
import { Link } from 'react-router-dom'

const withLinks = (Component) => (
  (props) => {
    const {
      id,
      baseUrl
    } = props

    return (
      <Link to={`${baseUrl}/${id}`} style={{ color: 'black', textDecoration: 'none' }}>
        <Component {...props} />
      </Link>
    )
  }
)

export default withLinks
