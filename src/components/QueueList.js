import React from 'react'

import Song from './Song'
import SongList from './SongList'

const QueueList = (props) => {
  const {
    songs,
  } = props

  return (
    <SongList>
      { songs.map(song => <tr><Song key={song.id} {...song} /></tr>) }
    </SongList>
  )
}

export default QueueList
