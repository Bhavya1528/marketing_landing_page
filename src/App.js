
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './global.css';
import HomePage from './components/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/arthat_logo.png';
import AboutUs from './components/AboutUs';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><HomePage /></div>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        
        
       
       


       
      </Routes>
    </Router>
  );
}


export default App;