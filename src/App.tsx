// App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;