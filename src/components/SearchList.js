import React from 'react'
import SongList from './SongList'
import { FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import Song from './Song'
import Detail from './Detail'

const Icon = styled(Detail)`
  :hover {
    cursor: pointer;
  } 

  :active {
    transform: scale(0.7);
    transform-origin: center;
    color: #58D186;
  }
`
const SearchList = (props) => {
  const {
    songs,
    style,
    onAdd,
  } = props
  
  return (
    <SongList style={style}>
      { songs.map(song => (
        <tr key={song.id}>
          <Song {...song} />
          <Icon style={{ width: '10%' }}><FiPlus size='1.5em' onClick={() => onAdd(song)}/></Icon> 
        </tr>
      )) }
    </SongList>
  )
}

export default SearchList
