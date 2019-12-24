import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from '../state';

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const Row = styled.li`
  padding: 0.8em;
  border-bottom: ${props => (props.final ? 'none' : '1px solid black')}
`;

const MemberList = (props) => {
  const members = useSelector(s => s.members.all);

  return (
    <List>
      {
        members.map((member, i) => (
          <Row final={i === members.length - 1} key={member.id}>{member}</Row>
        ))
      }
    </List>
  );
};

MemberList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MemberList;
