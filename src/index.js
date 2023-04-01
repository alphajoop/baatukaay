import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/style.css';
import reportWebVitals from './reportWebVitals';
import Wrapper from './components/wrapper';
import Navbar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const navbar = ReactDOM.createRoot(document.getElementById('navbar'));

navbar.render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>
);
root.render(
  <React.StrictMode>
    <Wrapper/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
