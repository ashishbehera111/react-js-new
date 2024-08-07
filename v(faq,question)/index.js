import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Faq from './Faq.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Faq/>
  </React.StrictMode>
);
