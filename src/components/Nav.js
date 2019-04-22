import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import uuid from 'uuid/v4'


const Nav = (props) => {
  const {
    children,
  } = props

  return (
    <Navbar>
      { 
        children.map(({props}) => (
          <NavLink key={uuid()} activeClassName='selected' className='link' {...props} />
        )) 
      }
    </Navbar>
  )
}

export default Nav
