import React, { memo } from 'react'
import Navbar from './Navbar'
import { 
  IoIosSearch as SearchIcon,
  IoIosMusicalNotes as CurrentPlayingIcon,
  IoMdPeople as MembersIcon
} from 'react-icons/io'
import { MdCollectionsBookmark as BookMarkIcon } from 'react-icons/md'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
 
const Link = (props) => <NavLink activeClassName='selected' className='link' {...props} />

const IconLink = (props) => <Link style={{ pointerEvents: 'inherit', display: 'flex', alignItems: 'center', flexDirection: 'column' }} {...props} />

const Text = styled.div`
  font-size: 10px;
`

const Nav = (props) => {
  const {
    match
  } = props
  
  return(
    <Navbar>
      <IconLink exact to={`${match}`}><CurrentPlayingIcon size='1.5em'/><Text>Currently Playing</Text></IconLink>
      <IconLink to={`${match}/browse`}><BookMarkIcon size='1.5em'/><Text>Browse</Text></IconLink>
      <IconLink to={`${match}/members`}><MembersIcon size='1.5em'/><Text>Members</Text></IconLink>
      <IconLink to={`${match}/search`}><SearchIcon size='1.5em'/><Text>Search</Text></IconLink>
    </Navbar>
  )
}

export default memo(Nav)
