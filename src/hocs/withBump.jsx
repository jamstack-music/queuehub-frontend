import React from 'react'
import styled from 'styled-components';

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
`;

function withBump(Component) {
  return (props) => {
    const {
      onBump,
      data,
    } = props;

    const handleClick = () => onBump(data);

    return (
      <Component {...data}>
        <BumpButton
          disabled={data.alreadyBumped}
          onClick={handleClick}
        >
          {data.bumps || 0}
        </BumpButton>
      </Component>
    );
  };
}

export default withBump;
