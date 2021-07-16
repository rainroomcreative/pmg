import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import firebase from "firebase/app";
import reportWebVitals from './reportWebVitals';

import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";



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
firebase.analytics();

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals();