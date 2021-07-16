import { lazy, Suspense, useEffect } from "react";
import firebase from 'firebase';
import { Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {

  const history = createBrowserHistory();
  const remoteConfig = firebase.remoteConfig();

  useEffect(() => {
    
    //remoteConfig.settings.minimumFetchIntervalMillis = 10000;
      remoteConfig.fetchAndActivate()
      .then(() => {
        console.log('YAY');
      }).catch((error) => {console.log(error)});
    
    
  }, [])

  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
