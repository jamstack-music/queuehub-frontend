import extractSong from './song';

const extractAlbum = (playlist) => {
  const {
    id,
    artists: [{
      name: artist,
    }],
    images,
    name,
    tracks: {
      items,
    },
  } = playlist;

  const songs = items.map(track => extractSong({
    ...track,
    album: {
      images,
      name,
    },
  }));

  return {
    id,
    artist,
    images,
    name,
    songs,
  };
};

export default extractAlbum;
