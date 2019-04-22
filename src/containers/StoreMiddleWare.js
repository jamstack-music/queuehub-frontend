import React, { useEffect, useState } from 'react'
import { joinRoom } from '../data/api'
import { Redirect } from 'react-router-dom'

const StoreMiddleWare = (props) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(function init() {
    async function initStore(room, id) {
      let name = sessionStorage.getItem('name')
      if(!name) {
        setError(true)
      } else {
        const { data, status } = await joinRoom(id, name) 
        if (status === 400)
          setError(true)
        room.initRoom(data)
        setLoading(false)
      }
    }

    const eventSource = new EventSource(`http://54.191.51.110:5000/stream?channel=${props.roomID}`)
    
    eventSource.addEventListener('song', function({data}) {
      const { song } = JSON.parse(data)
      props.room.addToQueue(song)
    }, false)

    eventSource.addEventListener('bump', function({data}) {
      props.room.bumpSong(data)
    })

    eventSource.addEventListener('next', function() {
      props.room.nextSong()
    }, false)

    initStore(props.room, props.roomID)
    return function unMount() {
      eventSource.close()
    }
  }, [])

  if(error) return <Redirect to='/' />
    
  return (
    <>
    {
      loading ? (
        <div>Loading...</div>
      ) : (
        props.children
      )
    }
    </>
  )
}

export default StoreMiddleWare
