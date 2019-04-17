import React, { useState, useEffect } from 'react'
import { spotify } from '../data/spotify'
import SearchList from '../components/SearchList'
import SearchBar from '../components/SearchBar'
import { Subscribe } from 'unstated'
import { RoomContainer } from '../store/room'

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
    }).catch( ({ status }) => {
      if(status === 400) setResults([])
    })
  }, [query])
  
  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => (
          <div>
            <SearchBar onChange={e => setQuery(e.target.value)}/>
            <SearchList
              onAdd={song => room.addToQueue(song)}
              style={{ marginTop: '3em' }}
              songs={results} />  
          </div>
        )
      }
    </Subscribe>
  )
}

export default Search
