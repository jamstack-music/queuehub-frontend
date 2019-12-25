/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ReduxContainer } from 'AppState/react';

import App from './App';

const AppContainer = () => (
  <ReduxContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxContainer>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
