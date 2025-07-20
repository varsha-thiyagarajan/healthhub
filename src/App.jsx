import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/about';
import Features from './components/features';
import Hero from './components/Hero';
import Contact from './pages/contact';
import Faq from './question/faqquestion';
import Helper from './question/helper';
import Login from './pages/logic';
import SignUp from './pages/signup';
import Support from './components/support';

function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // check login status from localStorage
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ask" element={<Faq />} />
        <Route path="/join" element={<Helper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* ✅ Support route is protected */}
        <Route path="/spt" element={isLoggedIn ? <Support /> : <Navigate to="/login" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
