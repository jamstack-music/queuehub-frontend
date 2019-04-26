import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Subscribe } from 'unstated';

import { RoomContainer } from '../store/room';
import Nav from '../components/Nav';
import StoreMiddleWare from '../containers/StoreMiddleWare';

import CurrentPlaying from './CurrentPlaying';
import Members from './Members';
import Search from './Search';
import NotFound from './NotFound';
import Browse from './Browse';

const View = styled.div`
  padding-bottom: 40px;
`;

const Room = (props) => {
  const {
    match,
  } = props;

  return (
    <Subscribe to={[RoomContainer]}>
      {
          room => (
            <StoreMiddleWare room={room} roomID={match.params.id}>
              <View>
                <Nav match={match.url} />
                <Switch>
                  <Route exact path={`${match.url}`} component={CurrentPlaying} />
                  <Route path={`${match.url}/members`} component={Members} />
                  <Route path={`${match.url}/search`} component={Search} />
                  <Route path={`${match.url}/browse`} component={Browse} />
                  <Route component={NotFound} />
                </Switch>
              </View>
            </StoreMiddleWare>
          )
        }
    </Subscribe>
  );
};

export default Room;
