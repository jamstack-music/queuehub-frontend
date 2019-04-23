import styled from 'styled-components'

const BumpButton = styled.button`
  color: grey;
  font-size: 1em;
  border: none;

  display: block;
  
  :disabled {
    color: #3963FB;
  }

  :before {
    content: "▲ ";
  }

  :active {
    transform: scale(0.85);
  }
`

export default BumpButton
