import React from 'react'
import Song from './Song'

const SongList = (props) => {
  const {
    songs
  } = props

  return (
    <table style={{ width: '100vw', borderCollapse: 'collapse'}}> 
      <tbody>
        { songs.map(({id, ...song}) => <Song key={id} {...song} />) }
      </tbody>
    </table>
  )
}

export default SongList
