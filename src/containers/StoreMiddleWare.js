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
        if (status === 400) {
          setError(true)
        } else {
          room.initRoom({...data, name: id})
          setLoading(false)
        }
      }
    }

    window.addEventListener('focus', function() { 
      console.debug('store-reloaded')
      initStore(props.room, props.roomID)
    }, false)
    
    const eventSource = new EventSource(`http://52.42.15.3:5000/stream?channel=${props.roomID}`)
    
    eventSource.addEventListener('song', function({data}) {
      console.debug('song added')
      const { song } = JSON.parse(data)
      props.room.addToQueue(song)
    }, false)

    
    eventSource.addEventListener('join', function({data}) {
      console.debug('Member joined')
      console.log(data)
    })
     
    eventSource.addEventListener('bump', function({data}) {
      console.debug('Bump song')
      props.room.bumpSong(data)
    })

    eventSource.addEventListener('next', function() {
      console.debug('Next song')
      props.room.nextSong()
    }, false)

    initStore(props.room, props.roomID)
    return function unMount() {
      eventSource.removeEventListener('song', function() {
        console.debug('song event listener removed')
      })
      
      eventSource.removeEventListener('next', function() {
        console.debug('next event listener removed')
      })

      eventSource.removeEventListener('join', function() {
        console.debug('join event listener removed')
      })

      eventSource.removeEventListener('bump', function() {
        console.debug('bump event listener removed')
      })

      window.removeEventListener('focus', function() {
        console.debug('window listener removed')
      })
      eventSource.close()
    }
  }, [])

  if(error) return <Redirect to={{ 
    pathname: '/',
    state: { message: 'Room does not exist' }
  }}/>
    
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
