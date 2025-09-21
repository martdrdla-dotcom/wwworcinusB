import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import InvestmentApproach from './pages/InvestmentApproach.tsx';
import Portfolio from './pages/Portfolio.tsx';
import ForPartners from './pages/ForPartners.tsx';
import Contact from './pages/Contact.tsx';
import GDPR from './pages/GDPR.tsx';
import Cookies from './pages/Cookies.tsx';
import LegalNotice from './pages/LegalNotice.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/investicni-pristup" element={<InvestmentApproach />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pro-partnery" element={<ForPartners />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/gdpr" element={<GDPR />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/pravni-upozorneni" element={<LegalNotice />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;