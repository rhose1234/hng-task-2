import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const rootElement = document.getElementById('root');

const renderApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(renderApp(), rootElement);
