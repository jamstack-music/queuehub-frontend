/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter } from 'react-router-dom';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';

import App from './App';
import { RoomProvider } from './store/room';

import './index.css';

const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 2000,
  offset: '60px',
  transition: transitions.FADE,
};

const AppContainer = () => (
  <RoomProvider>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertProvider>
  </RoomProvider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
