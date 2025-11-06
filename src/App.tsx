import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Members from './components/Members';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onNavigate={(page) => navigate(`/${page}`)} />
                <Services />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/members" element={<Members />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer onNavigate={(page) => navigate(`/${page}`)} />
      </div>
    </>
  );
}

export default App;
