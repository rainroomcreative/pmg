import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './includes/header';
import Home from './home/home';
import About from './about/about';
import Blog from './blog/blog';
import Portfolio from './portfolio/portfolio';
import Pricing from './pricing/pricing';
import Services from './services/services';
import ContactForm from './includes/contact';
import Footer from './includes/footer';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <div className="App">
            <Header />
            <div className="bg-grid-lines bg-cover">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
              <ContactForm />
            </div>
            <Footer />
          </div>
        </Router>
      </ParallaxProvider>
    );
  };
}

export default App;