import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Marketplace from './components/Marketplace';
import Team from './components/Team';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <Marketplace />
      <Team />
      <About />
    </div>
  );
}

export default App;