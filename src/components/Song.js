import React from 'react'
import styled from 'styled-components'

const Detail = styled.td`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 4em;
  padding-left: 0.5em;
  padding-right: 1em;
`

const Song = (props) => {
  const {
    title,
    artist,
    images: [,,{
      url: albumUrl
    }]
  } = props
  
  return (
    <tr>
			<Detail><img alt={albumUrl} src={albumUrl} style={{width: 50, height: 50}}/></Detail>
      <Detail>{title}</Detail>
      <Detail>{artist}</Detail>
    </tr>
  )
}

export default Song
