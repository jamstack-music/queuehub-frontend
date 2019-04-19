import React, { useState, useEffect } from 'react'
import { spotify } from '../data/spotify'
import AddList from '../components/Songs/AddList'
import SearchBar from '../components/SearchBar'
import extractSong from '../data/extractors/song'
import { Subscribe } from 'unstated'
import { RoomContainer } from '../store/room'
import { addSong as addSongRemote } from '../data/api'
import Alert from '../components/Alert'

const renderAlert = (alert) => {
  if(alert === 'success') {
    return <Alert type='success' message='Song Added!' />
  } else if(alert === 'failure') {
    console.log('triggered')
    return <Alert type='failure' message='Looks like the song is already in the queue' />
  }
}

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [alert, setAlert] = useState(null)
  
  const addSong = (room, song) => {
    if(room.state.queue.find(({ id }) => id === song.id)) {
      setAlert('failure')
    } else{
      addSongRemote(room.state.name, song).then(res => {
        setAlert('success')
      })
    }
  }
  useEffect(function search() {
    spotify.searchTracks(query).then(results => {
      const { tracks: { items } } = results

      const searchResults = items.map(song => extractSong(song))

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
            { renderAlert(alert) }
            <SearchBar onChange={e => setQuery(e.target.value)}/>
            <AddList
              onAdd={song => addSong(room.state.name, song)}
              style={{ marginTop: '3em' }}
              songs={results} />  
          </div>
        )
      }
    </Subscribe>
  )
}

export default Search
