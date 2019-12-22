import React from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

const AddBtn = styled.button`
  border: none;
  color: #3963FB;
  
  :active {
    color: ##3958D6;
    transform: scale(0.95);
  }
`;

function withAdd(Component) {
  return (props) => {
    const {
      onAdd,
      data,
    } = props;

    const handleClick = () => onAdd(data);

    return (
      <Component {...data}>
        <AddBtn onClick={handleClick}><FiPlus size="2em" /></AddBtn>
      </Component>
    );
  };
}

export default withAdd;
