import React from 'react';
import uuidv4 from 'uuid/v4';

import withLinks from '../../hocs/withLinks';
import useInfiniteRetrieval from '../../hooks/useInfiniteRetrieval';

import Album from '../../components/Album';
import Grid from '../../components/Grid';

const AlbumLink = withLinks(Album);

const Albums = (props) => {
  const {
    match,
  } = props;

  const [list] = useInfiniteRetrieval('https://api.spotify.com/v1/me/albums');

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
  );
};

export default Albums;
