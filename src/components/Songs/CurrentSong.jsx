import React from 'react';

const CurrentSong = (props) => {
  const {
    title,
    artist,
    images,
    addedBy,
  } = props;


  const album = images ? images[0].url : 'http://placeholder.com/200';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={album} alt={album} style={{ width: 200, height: 200 }} />
      <div style={{ fontSize: '1.2em', fontWeight: 'bold', margin: '0.5em' }}>{title}</div>
      <div style={{ fontSize: '1.2em', margin: '0.3em' }}>{artist}</div>
      <div>
        Added by:
        {addedBy}
      </div>
    </div>
  );
};

CurrentSong.defaultProps = {
  title: '---',
  artist: '---',
  images: [{ url: 'https://via.placeholder.com/200' }],
  addedBy: '---',
};

export default CurrentSong;
