import React from 'react'
import SongList from './SongList'

import Song from './Song'
import Detail from './Detail'

const SearchList = (props) => {
  const {
    songs,
    style,
    onAdd,
  } = props
  
  return (
    <SongList style={style}>
      { songs.map(song => (
        <tr>
          <Song key={song.id} {...song} />
          <Detail><button onClick={() => onAdd(song)}>Add</button></Detail> 
        </tr>
      )) }
    </SongList>
  )
}

export default SearchList
