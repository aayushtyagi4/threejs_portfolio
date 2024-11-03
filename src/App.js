import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import {Hero} from './components/Hero'
import About from './sections/About';
import Project from './sections/Project';
import Clients from './sections/Clients';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
import WorkExperience from './sections/WorkExperience';

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Clients/>
      <WorkExperience/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
