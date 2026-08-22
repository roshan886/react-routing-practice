import Footer from './components/Footer.jsx'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { Routes } from 'react-router-dom';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import Contact from './pages/Conatact.jsx';
import Notfound from './Notfound.jsx';
import Women from './pages/Women.jsx';
import Men from './pages/Men.jsx';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
        const overlay = document.getElementById("overlay");
                window.addEventListener("mousemove", (e) => {
                    const x = e.clientX;
                    const y = e.clientY;
                    const pos = `${x}px ${y}px`;
                    overlay.style.maskImage = `radial-gradient(circle 120px at ${pos}, transparent 0%, black 150px)`;
                    overlay.style.webkitMaskImage = overlay.style.maskImage;
                });
  }, [])
  

  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
         <Route path='/product/men' element={<Men />} />
          <Route path='/product/women' element={<Women />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
      
    </>
  )
}

export default App