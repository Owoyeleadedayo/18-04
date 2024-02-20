import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Price from './pages/Price';
import Contact from './pages/Contact';
import FirstNav from './components/FirstNav';

function App() {
  return (
    <>
      <BrowserRouter>
        <FirstNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
