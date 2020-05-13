import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './Reducers/index';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <Provider store={createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

