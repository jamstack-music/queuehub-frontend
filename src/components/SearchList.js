import React from 'react'
import SongList from './SongList'
import { FiPlus } from 'react-icons/fi'
import Song from './Song'

const SearchList = (props) => {
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
            <button onClick={() => onAdd(song)}><FiPlus size='1.5em'/></button> 
          </Song>
        ))
      }
    </SongList>
  )
}

export default SearchList
