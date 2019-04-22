import React from 'react'
import SongList from './SongList'
import { FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import Song from './Song'

const AddBtn = styled.button`
  border: none;
  color: #3963FB;
  
  :active {
    color: ##3958D6;
    transform: scale(0.95);
  }
`

const AddList = (props) => {
  const {
    songs,
    style,
    onAdd,
  } = props
  
  return (
    <SongList style={style}>
      { 
        songs.map((song, i) => (
          <Song key={song.id+i} {...song}>
            <AddBtn onClick={() => onAdd(song)}><FiPlus size='2em'/></AddBtn> 
          </Song>
        ))
      }
    </SongList>
  )
}

export default AddList 
