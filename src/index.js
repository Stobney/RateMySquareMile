import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';

const rootElement = document.getElementById('root')
rootElement.style.height = '100%'
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);


