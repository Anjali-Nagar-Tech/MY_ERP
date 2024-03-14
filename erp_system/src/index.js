import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';

ReactDOM.render(
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My ERP</title>
      <link rel="icon" type="image/png" href="./icon.jpg" />
    </Helmet>
    <App />
  </>,
  document.getElementById('root')
);
