import React from 'react';
import {
  Switch, Route, NavLink, Redirect,
} from 'react-router-dom';

import Album from './Albums/Album';
import Albums from './Albums/Albums';
import BrowseNav from '../components/BrowseNav';
import NotFound from './NotFound';
import Playlist from './Playlists/Playlist';
import Playlists from './Playlists/Playlists';

const BrowseLink = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <NavLink activeClassName="selected" className="link" {...rest}>{children}</NavLink>
  )
};

const Browse = (props) => {
  const {
    match,
  } = props;

  return (
    <div style={{ paddingTop: '50px' }}>
      <BrowseNav>
        <BrowseLink to={`${match.url}/playlists`}>Playlists</BrowseLink>
        <BrowseLink to={`${match.url}/albums`}>Albums</BrowseLink>
      </BrowseNav>
      <Switch>
        <Redirect exact from={`${match.url}`} to={`${match.url}/playlists`} />
        <Route exact path={`${match.url}/playlists`} component={Playlists} />
        <Route path={`${match.url}/playlists/:id`} component={Playlist} />
        <Route exact path={`${match.url}/albums`} component={Albums} />
        <Route path={`${match.url}/albums/:id`} component={Album} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Browse;
