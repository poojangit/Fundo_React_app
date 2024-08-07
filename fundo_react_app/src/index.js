import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider from react-redux

// store.js
import { createStore ,applyMiddleware} from 'redux';
import reducer from './Redux/Reducer.jsx';
import {thunk} from 'redux-thunk'


const store = createStore(
  reducer,
  applyMiddleware(thunk)
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals





