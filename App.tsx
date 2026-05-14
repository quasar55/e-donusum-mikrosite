import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import EMaliye from './pages/EMaliye';
import EBilisim from './pages/EBilisim';

// Scroll Animation Hook
function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollAnimations />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-maliye" element={<EMaliye />} />
        <Route path="/e-bilisim" element={<EBilisim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;