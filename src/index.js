import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer'

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Display />
    </Provider>
  </React.StrictMode>
);

