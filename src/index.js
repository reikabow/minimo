import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import minimoApp from './redux/reducers';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(minimoApp);

// Debugging
window.store = store;

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
