import React, { memo } from 'react';

const Song = (props) => {
  const {
    title,
    artist,
    images,
    children,
  } = props;

  const thumbnail = images && images.length !== 0 ? images[images.length - 1].url : 'http://placeholder.com/200';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <img alt={thumbnail} src={thumbnail} style={{ width: 40, height: 40 }} />
      <div
        style={{
          flex: 2,
          marginLeft: 10,
          marginRight: 10,
          textAlign: 'left',
        }}
      >
        <div>{title}</div>
        <div style={{ fontSize: '12px', color: '#3C3C3C' }}>{artist}</div>
      </div>
      {children}
    </div>
  );
};

export default memo(Song);
