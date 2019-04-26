import React from 'react';
import uuidv4 from 'uuid/v4';
import { FiPlus } from 'react-icons/fi';
import styled from 'styled-components';

import Song from './Song';
import SongList from './SongList';

const AddBtn = styled.button`
  border: none;
  color: #3963FB;
  
  :active {
    color: ##3958D6;
    transform: scale(0.95);
  }
`;

const AddList = (props) => {
  const {
    songs,
    style,
    onAdd,
  } = props

  return (
    <SongList style={style}>
      {
        songs.map(song => (
          <Song key={uuidv4()} {...song}>
            <AddBtn onClick={() => onAdd(song)}><FiPlus size="2em" /></AddBtn>
          </Song>
        ))
      }
    </SongList>
  );
};

export default AddList;
