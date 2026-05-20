import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';
import EMaliye from './EMaliye';
import EBilisim from './EBilisim';
import NotFound from './NotFound';

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
