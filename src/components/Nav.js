import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import uuid from 'uuid/v4'

const Navbar = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: #365DFF;
  color: white;

  & .link {
    color: #4BA7FF;
    text-decoration: none;
  }

  & .selected {
    color: white;
  }
`

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
