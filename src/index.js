import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Startup from './Startup_Section/Startup.js';
import Diseño from './Diseño_Section/Diseño.js';
import { HashRouter } from 'react-router-dom';

import {
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter>
  <Routes>
   <Route path="/" element={<App />} />
  <Route path="/diseno" element={<Diseño />} />
  <Route path="/startup" element={<Startup />} />
  </Routes>
</HashRouter>
</React.StrictMode> 

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
