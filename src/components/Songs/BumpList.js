import React from 'react'
import SongList from './SongList'
import Song from './Song'
import uuidv4 from 'uuid/v4'

const BumpList = (props) => {
  const {
    songs,
    style,
    onBump,
  } = props

  return (
    <SongList style={style}>
      {
        songs.map(song => (
          <Song key={uuidv4()} {...song}>
            <button onClick={() => onBump(song)}>{song.bumps || 0}</button> 
          </Song>
        ))
      }
    </SongList>
  )
}

export default BumpList
