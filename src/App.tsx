import Footer from "./components/Footer";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Headers'; // The updated header component
import Home from './components/Home'; // The updated header component
import SoilReport from './components/SoilReport';
import CropGuide from './components/CropGuide';
import ContactUs from './components/ContactUs';
import Login from './components/Auth';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soil-report" element={<SoilReport />} />
          <Route path="/crop-guide" element={<CropGuide />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

