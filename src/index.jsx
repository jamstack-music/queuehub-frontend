/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter } from 'react-router-dom';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import { rootReducer, ReduxContainer } from './state';

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

const AppContainer = () => {
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <ReduxContainer.Provider value={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxContainer.Provider>
    </AlertProvider>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById('root'));
