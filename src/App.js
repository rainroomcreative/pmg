

//Css Import
import './stylesheets/app.scss';


// Components
import NavBarComp from './components/navbar';
import Home from "./components/home";
import Portfolio from "./components/Portfolio";
import Aviation from "./components/Aviation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Test from "./components/test";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
      <Router>
          <NavBarComp />
          <ScrollToTop />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio"  component={Portfolio} />
        <Route path="/aviation-time"  component={Aviation} />
        <Route path="/contact"  component={Contact} />
        <Route path="/test"  component={Test} />
    </Switch>
        < Footer />
       </Router>
   
  );
}

export default App;
