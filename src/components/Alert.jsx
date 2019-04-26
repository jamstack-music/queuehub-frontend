import React from 'react';
import styled from 'styled-components';

const AlertBox = styled.div`
  position: absolute;
  top: 0;
  margin: 1em auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
`;

const Success = styled(AlertBox)`
  border: 1px solid #6BF1C4;
  background-color: #CAF7EC;
`;

const Failure = styled(AlertBox)`
  border: 1px solid #5AA4FF;
  background-color: #BBD7FF; 
`;

const Alert = (props) => {
  const {
    type = 'success',
    message,
    style,
  } = props;

  const Component = type === 'success' ? Success : Failure;

  return (
    <Component style={style}>
      { message }
    </Component>
  );
};

export default Alert;
