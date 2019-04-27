/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter } from 'react-router-dom';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import { Provider } from 'unstated';

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
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AlertProvider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
