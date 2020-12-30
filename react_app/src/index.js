import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js'

import App from './App';
import reportWebVitals from './reportWebVitals';
import Appbar from './components/Navbar';
import Animatebg from './components/Animatebg';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageRoute from './routes/PageRoute';
import {IntlProvider} from 'react-intl';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons/';

library.add(fab,faUser,faLock);

// ReactDOM.render(
//   <React.StrictMode>
//     <Animatebg />
//   </React.StrictMode>,
//   document.getElementById('animate-bg')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <Appbar/>    
//   </React.StrictMode>,
//   document.getElementById('header')
// );
var locale = navigator.language;
console.log(locale);

// ReactDOM.render(
//   <Animatebg/>
// ,document.getElementById('animate-bg')  
// );
ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} key={locale} defaultLocale="en">            
      <Appbar/>

      <PageRoute />

      <Footer/>
      <Animatebg/>

    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
