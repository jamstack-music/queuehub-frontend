/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter } from 'react-router-dom';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import RoomContainer from './store/room';

import App from './App';

import './index.css';

const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 2000,
  containerStyle: {
    marginTop: '30px',
  },
  transition: transitions.FADE,
};

const AppContainer = () => (
  <AlertProvider template={AlertTemplate} {...alertOptions}>
    <RoomContainer.Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RoomContainer.Provider>
  </AlertProvider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
