import { useEffect } from 'react';
import Footer from './Footer';

// =============================================
// Hukuki sayfalar için ortak düzen (navbar + içerik + Footer)
// Her hukuki sayfa bunu kullanır: <LegalLayout title="..."> içerik </LegalLayout>
// =============================================
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.title = `${title} | e-dönüşüm.company`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-white font-bold text-lg">e</div>
            <div>
              <div className="text-lg font-bold text-gray-900 leading-tight">e-dönüşüm.company</div>
              <div className="text-xs text-blue-600">e-Dönüşüm Hizmetleri</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
            <a href="/e-maliye" className="hover:text-blue-600 transition-colors">e-Maliye</a>
            <a href="/e-bilisim" className="hover:text-blue-600 transition-colors">e-Bilişim</a>
            <a href="/hakkimizda" className="hover:text-blue-600 transition-colors">Hakkımızda</a>
            <a href="/#iletisim" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition-colors">İletişim</a>
          </div>
        </div>
      </nav>

      {/* İçerik */}
      <main className="flex-1 pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
            {updated && <p className="text-gray-500 text-sm">Son güncelleme: {updated}</p>}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 legal-content">
            {children}
          </div>

          <p className="text-gray-400 text-xs mt-6 text-center">
            Bu metin bilgilendirme amaçlıdır. Nihai hukuki değerlendirme için bir hukuk danışmanına başvurmanız önerilir.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
