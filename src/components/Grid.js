import React from 'react'

const Grid = (props) => {
  const { 
    children,
    style,
  } = props

  return (
    <div style={{ width: '100%', columnCount: 2, display: 'flex', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap', ...style }}>
      { children }
    </div>
  )
}

export default Grid
