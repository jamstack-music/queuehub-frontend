import React from 'react';

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

  const albums = list.map(album => (
    <AlbumLink
      key={album.id}
      baseUrl={match.url}
      {...album}
    />
  ));

  return (
    <Grid>
      { albums }
    </Grid>
  );
};

export default Albums;
