import React, { memo } from 'react'
import Navbar from './Navbar'
import { 
  IoIosSearch as SearchIcon,
  IoIosMusicalNotes as CurrentPlayingIcon,
  IoMdPeople as MembersIcon
  
} from 'react-icons/io'
import { MdCollectionsBookmark as BookMarkIcon } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
 
const Link = (props) => <NavLink activeClassName='selected' className='link' {...props} />

const IconLink = (props) => <Link style={{ pointerEvents: 'inherit' }} {...props} />

const Nav = (props) => {
  const {
    match
  } = props
  
  return(
    <Navbar>
      <IconLink exact to={`${match}`}><CurrentPlayingIcon size='1.5em'/></IconLink>
      <IconLink to={`${match}/browse`}><BookMarkIcon size='1.5em'/></IconLink>
      <IconLink to={`${match}/members`}><MembersIcon size='1.5em'/></IconLink>
      <IconLink to={`${match}/search`}><SearchIcon size='1.5em'/></IconLink>
    </Navbar>
  )
}

export default memo(Nav)
