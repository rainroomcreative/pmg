import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import React from 'react';
import ReactDOM from 'react-dom';
import LogRocket from 'logrocket';
import './index.css';
import Header from './includes/header.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import firebase from "firebase/app";
import 'firebase/analytics'

var firebaseConfig = {
  apiKey: `${process.env.REACT_APP_apiKey}`,
  authDomain: `${process.env.REACT_APP_authDomain}`,
  projectId: `${process.env.REACT_APP_projectId}`,
  storageBucket: `${process.env.REACT_APP_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
  appId: `${process.env.REACT_APP_appId}`,
  measurementId: `${process.env.REACT_APP_measurementId}`
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === 'production') {

  LogRocket.init(`${process.env.REACT_APP_appId}`);
  firebase.analytics();
};


ReactDOM.render(
  <BrowserRouter>
    <Header/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
