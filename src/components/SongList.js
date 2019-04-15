import React from 'react'
import Song from './Song'

const SongList = (props) => {
  const {
    children,
    style,
  } = props

  return (
    <table style={{ width: '100vw', borderCollapse: 'collapse', ...style}}> 
      <tbody>
        { children } 
      </tbody>
    </table>
  )
}

export default SongList
