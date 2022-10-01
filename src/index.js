import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './reducer/store';
import "./index.css"
import Navbar from "./layouts/navbar/Navbar";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <Navbar/>
  </Provider>
);
