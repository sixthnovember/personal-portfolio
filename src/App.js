import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from './components/navbar/Navbar';
import PageTransition from './components/pagetransition/PageTransition';
import './App.css';

function App() {
  return (
    <Router>
      <AppNavbar />
      <PageTransition />
    </Router>
  );
}

export default App;