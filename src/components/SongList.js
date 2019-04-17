import React from 'react'
import Song from './Song'
import styled from 'styled-components'

const Ul = styled.div`

`

const SongList = (props) => {
  const {
    children,
    songs,
    style,
  } = props

  return (
    <div style={{ width: '100vw', ...style}}> 
      { children ? children : (
        songs.map((song, i) => <Song key={song.id+i} {...song} /> )
      ) } 
    </div>
  )
}

export default SongList
