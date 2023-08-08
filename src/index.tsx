import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './css/style.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // /portfolio-new/
  <BrowserRouter basename="/port/build/">
    <App />
  </BrowserRouter>
);