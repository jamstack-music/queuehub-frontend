import React, { useEffect, useState } from 'react'
import withLinks from '../../hocs/withLinks'
import uuidv4 from 'uuid/v4'
import useInfiniteRetrieval from '../../hooks/useInfiniteRetrieval'

import Album from '../../components/Album'
import Grid from '../../components/Grid'

const Albums = ({match}) => {
  const [list,] = useInfiniteRetrieval('https://api.spotify.com/v1/me/albums') 
  
  return (
    <Grid>
      { 
        list.map(album => (
          <AlbumLink 
            baseUrl={match.url}
            key={uuidv4()} 
            {...album} 
          />
        ))
      }
    </Grid>
  )
}

const AlbumLink = withLinks(Album)

export default Albums
