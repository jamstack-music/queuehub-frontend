import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = styled.img`
  witdh: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Info = styled.div`
  margin: 1em;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;

const Username = styled.div`
  font-style: italic;
`;

const Member = (props) => {
  const {
    id,
    first,
    last,
    image,
  } = props;

  const name = `${first} ${last}`;

  return (
    <Container>
      <Profile src={image} alt={name} />
      <Info>
        <Name>{ name }</Name>
        <Username>{ id }</Username>
      </Info>
    </Container>
  );
};

export default Member;
