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

    initStore(props.room, props.roomID)
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
