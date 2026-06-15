import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';
import EMaliye from './EMaliye';
import EBilisim from './EBilisim';
import NotFound from './NotFound';
import SSS from './SSS';
import Hakkimizda from "./HakkimizdaPage";
import KVKK from './KVKK';
import Gizlilik from './Gizlilik';
import CerezPolitikasi from './CerezPolitikasi';
import KullanimKosullari from './KullanimKosullari';

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
        <Route path="/sss" element={<SSS />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/kvkk" element={<KVKK />} />
        <Route path="/gizlilik" element={<Gizlilik />} />
        <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
        <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
