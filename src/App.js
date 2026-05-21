import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Homepages from './Components/home/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/footer/Footer';
import TechPage from './Components/Techpage/TechPage';
import Fashion from './Components/Fashion/Fashion';

const App = () => {
  return (
    <Router basename="/ConnectHQ">   {/* ← This is the most important fix */}
      <Header />
      
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/TechPage" element={<TechPage />} />
        <Route path="/Fashion" element={<Fashion />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
