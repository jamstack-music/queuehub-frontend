import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const Row = styled.li`
  padding: 0.8em;
  border-bottom: ${props => (props.final ? 'none' : '1px solid black')}
`;

const MemberList = (props) => {
  const {
    members,
  } = props;

  return (
    <List>
      {
        members.map((member, i) => (
          <Row final={i === members.length - 1} key={uuidv4()}>{member}</Row>
        ))
      }
    </List>
  );
};

MemberList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MemberList;
