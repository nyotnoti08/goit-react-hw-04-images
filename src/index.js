import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import Root from './components/Root'; // Import your Root component
import './components/globals.module.css'; // Import your global CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);