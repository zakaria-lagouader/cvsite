import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, StoreProvider } from 'easy-peasy';
import authModel from './authModel'

const store = createStore(authModel)


ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
  ,
  document.getElementById('root')
);
