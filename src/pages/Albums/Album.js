import React, { useEffect, useState } from 'react'
import { spotify } from '../../data/spotify'
import { addSong as addSongRemote } from '../../data/api'
import { Subscribe } from 'unstated'
import { RoomContainer } from '../../store/room'
import AlbumCover from '../../components/Album'
import { useAlert } from 'react-alert'
import extractAlbum from '../../data/extractors/album'
import AddList from '../../components/Songs/AddList'

const Album = (props) => {
  const {
    match
  } = props 
  
  const [album, setAlbum] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(function retreive(){
    spotify.getAlbum(match.params.id).then(res => {
      const album = extractAlbum(res)
      setAlbum(album)

      setLoading(false)
    })
  }, [])
  
  const alert = useAlert()
  const addSong = (room, song) => {
    if(room.state.queue.find(({ id }) => id === song.id)) {
      alert.error('This song is already in the queue!')
    } else{
      addSongRemote(room.state.name, song).then(res => {
        alert.success('Song added to queue!')
      })
    }
  }


  if(loading) {
    return <div>Loading...</div>
  } else {
    return (
      <Subscribe to={[RoomContainer]}>
        {
          room => (
            <div style={{ width: '100%' }}>
              <AlbumCover dim={250} {...album} />
              <AddList 
                style={{ width: '100%' }}
                songs={album.songs}
                onAdd={song => addSong(room, song)}
              />
            </div>
          )
        }
      </Subscribe>
    )
  } 
}

export default Album 
