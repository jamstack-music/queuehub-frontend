import React from 'react'
import uuidv4 from 'uuid/v4'

import useInfiniteRetrieval from '../../hooks/useInfiniteRetrieval'

import Grid from '../../components/Grid'
import Playlist from '../../components/Playlist'
import withLinks from '../../hocs/withLinks'

const PlaylistLink = withLinks(Playlist)
 
const Playlists = (props) => {
  const {
    match
  } = props

  const [list,] = useInfiniteRetrieval('https://api.spotify.com/v1/me/playlists')

  return (
    <Grid>
      {
        list.map(playlist => (
          <PlaylistLink 
            key={uuidv4()}
            baseUrl={match.url}
            {...playlist}
          />
        ))
      }
    </Grid>
  )
}

export default Playlists
