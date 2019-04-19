import React, { useEffect, useState } from 'react'
import { joinRoom } from '../data/api'

const StoreMiddleWare = (props) => {
  const [loading, setLoading] = useState(true)

  useEffect(function init() {
    async function initStore(room, id) {
      const { data } = await joinRoom(id, 'Zach')
      room.initRoom(data)
      setLoading(false)
    }

    const eventSource = new EventSource(`http://54.191.51.110:5000/stream?channel=${props.roomID}`)
    
    eventSource.addEventListener('song', function({data}) {
      const { song } = JSON.parse(data)
      props.room.addToQueue(song)
    }, false)

    eventSource.addEventListener('next', function() {
      props.room.nextSong()
    }, false)

    initStore(props.room, props.roomID)
    return function unMount() {
      eventSource.removeEventListener('song')
      eventSource.removeEventListener('next')
      eventSource.close()
    }
  }, [])

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
