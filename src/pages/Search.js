import React, { useState, useEffect } from 'react'
import { spotify } from '../data/spotify'
import SongList from '../components/SongList'

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(function search() {
    spotify.searchTracks(query).then(results => {
      const { tracks: { items } } = results

      const searchResults = items.map(({ 
        name: title,
        id,
        uri,
        artists: [{
          name: artist 
        },],
        album: {
          name: album,
          images
        },  
      }) => ({
        title,
        id,
        uri,
        artist,
        album,
        images,
      }))

      setResults(searchResults)    
    }).catch(err => console.log(err))
  }, [query])
  
  return (
    <div>
      <input type='text' onChange={e => setQuery(e.target.value)}/>
      <SongList songs={results} />  
    </div>
  )
}

export default Search
