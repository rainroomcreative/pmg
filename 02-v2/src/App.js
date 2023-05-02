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
import Article from './blog/article';
import TermsAndPrivacyPolicy from './terms/terms-and-privacy-policy';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from './includes/scrollToTop';


class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <ScrollToTop />
          <div className="App scroll-smooth">
            <Header />
            <div className="bg-grid-lines bg-cover">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<Article />} />
                <Route path="/terms-and-privacy-policy" element={<TermsAndPrivacyPolicy />} />
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