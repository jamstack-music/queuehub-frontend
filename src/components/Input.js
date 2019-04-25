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

export default Input;
