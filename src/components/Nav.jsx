import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  IoIosSearch as SearchIcon,
  IoIosMusicalNotes as CurrentPlayingIcon,
  IoMdPeople as MembersIcon,
} from 'react-icons/io';
import { MdCollectionsBookmark as BookMarkIcon } from 'react-icons/md';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Link = props => <NavLink activeClassName="selected" className="link" {...props} />;

const IconLink = props => (
  <Link
    style={{
      pointerEvents: 'inherit', display: 'flex', alignItems: 'center', flexDirection: 'column',
    }}
    {...props}
  />
);

const Text = styled.div`
  font-size: 10px;
`;

const Nav = (props) => {
  const {
    match,
  } = props;

  const param = useMemo(() => match, [match]);

  return (
    <Navbar>
      <IconLink exact to={`${param}`}>
        <CurrentPlayingIcon size="1.5em" />
        <Text>Currently Playing</Text>
      </IconLink>
      <IconLink to={`${param}/browse`}>
        <BookMarkIcon size="1.5em" />
        <Text>Browse</Text>
      </IconLink>
      <IconLink to={`${param}/members`}>
        <MembersIcon size="1.5em" />
        <Text>Members</Text>
      </IconLink>
      <IconLink to={`${param}/search`}>
        <SearchIcon size="1.5em" />
        <Text>Search</Text>
      </IconLink>
    </Navbar>
  );
};

Nav.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Nav;
