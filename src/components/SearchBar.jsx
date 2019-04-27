import React, { memo } from 'react';
import { IoIosSearch as SearchIcon } from 'react-icons/io';
import styled from 'styled-components';

const Input = styled.input`
  height: 1.5em;
  flex: 10;
  padding-left: 20px;
  margin: 0 0.5em;
  font-size: 16px;
  border: 1px solid #D6D6D6;
  border-radius: 20px;
  
  :focus {
    border: 1px solid #09A7FF;
  }
`;

const Bar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  padding: 0.5em 0;
  align-items: center;
  justify-content: center;
  background-color: #E6E6E6;
  border-bottom: 1px solid #D6D6D6;
`;

const SearchBar = (props) => {
  const {
    onChange,
  } = props;

  const handleInput = e => onChange(e.target.value);

  return (
    <Bar>
      <SearchIcon style={{ margin: '0 0 0 0.5em', flex: 1 }} />
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleInput}
      />
    </Bar>
  );
};

export default memo(SearchBar);
