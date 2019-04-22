import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AlertTemplate from 'react-alert-template-basic'
import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import { BrowserRouter } from 'react-router-dom'
import { RoomProvider } from './store/room'

const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 2000,
  offset: '60px',
  transition: transitions.FADE,
}

ReactDOM.render(
  <RoomProvider>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
     <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AlertProvider>
  </RoomProvider>, document.getElementById('root'));

