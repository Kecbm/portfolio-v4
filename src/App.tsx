import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import StyledApp from './StyledApp';

const App: React.FC = () => {
  return (
    <StyledApp>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </StyledApp>
  );
}

export default App;
