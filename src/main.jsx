import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(
document.getelementById("root")
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
      </BrowserRouter>
  </React.StrictMode>
);
