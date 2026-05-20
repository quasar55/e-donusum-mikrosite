import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Sayfa Bulunamadı | inşa.systems';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <div className="text-9xl font-bold text-blue-300 opacity-30 mb-4">404</div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">i</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Sayfa Bulunamadı</h1>
        <p className="text-blue-200 text-lg mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Ana Sayfaya Dön
          </a>
          <a href="/#iletisim" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
            İletişime Geç
          </a>
        </div>
      </div>
    </div>
  );
}