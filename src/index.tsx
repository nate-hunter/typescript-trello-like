import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { AppStateProvider } from './state/AppStateContext';

ReactDOM.render(
  <>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </>,
  document.getElementById('root')
);


