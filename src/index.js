import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';

import {store,persistor} from './redux/store';

ReactDOM.render(
<Provider store={store}>
<Router>
  <PersistGate persistor={persistor}>
      <App />
  </PersistGate>
  </Router>
</Provider>,
  document.getElementById('root')
);
