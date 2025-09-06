import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
