import React from 'react'
import styled from 'styled-components'
import uuidv4 from 'uuid/v4'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const BrowseNavbar = styled(Navbar)`
  top: 0;
  background-color: #EDF0F5;
  border-bottom: 1px solid grey;
  color: #365DFF;

  & .link {
    text-decoration: none;
  }

  & .link:active {
    transform: scale(0.95);
  }

  & .selected {
    font-weight: bold;
    color: #365DFF;
  }
`

const BrowseNav = (props) => {
  const {
    children
  } = props

  return (
    <BrowseNavbar>
      {
        children.map(({props}) => (
          <NavLink key={uuidv4()} activeClassName='selected' className='link' {...props} />
        ))
      }
    </BrowseNavbar>
  )
}

export default BrowseNav
