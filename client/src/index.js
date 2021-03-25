import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import 'resources/styles/styles.css';

import { Provider } from 'react-redux';
import ReduxStore from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
