import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import StartHere from './pages/StartHere';
import Accelerator from './pages/Accelerator';
import Toolkits from './pages/Toolkits';
import Strategy from './pages/Strategy';
import Consulting from './pages/Consulting';
import Community from './pages/Community';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/accelerator" element={<Accelerator />} />
          <Route path="/toolkits" element={<Toolkits />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
