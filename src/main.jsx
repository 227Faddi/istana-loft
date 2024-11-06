import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './utils/i18n/index.js';
import ReactGA from 'react-ga4';
ReactGA.initialize('G-ZTEY1QBTTT');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
