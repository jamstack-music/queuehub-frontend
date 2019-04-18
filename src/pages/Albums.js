import React, { useEffect, useState } from 'react'
import { spotify } from '../data/spotify'

const Albums = ({match}) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(function fetchAlbums() {
    spotify.getMySavedAlbums().then(res => {
    })    
  }, [])
  
  if (loading) return <div>Loading...</div>
    
  return (
    <div>
    </div> 
  )
}

export default Albums
