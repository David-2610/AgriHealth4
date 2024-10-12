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
        <div>
<BackgroundSection
title="Understanding Your Soil"
description="Explore the science behind soil composition and how it affects plant growth."
imageUrl="https://images.unsplash.com/photo-1706862609885-7771b001daa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DF" /* Replace with actual image path */
/>
    </div>
      </div>
    </Router>
  );
};

export default App;

