// =============================================
// Ortak Footer Bileşeni
// Tüm sayfalarda <Footer /> olarak çağrılır.
// Hukuki link satırı + mevcut footer içeriği + WhatsApp butonu burada.
// =============================================
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 md:mb-8 px-4 py-4 md:py-6 bg-gray-800 rounded-xl max-w-3xl mx-auto">
            <p className="text-gray-300 text-sm leading-relaxed">
              <a href="https://insa.systems/" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium hover:text-white transition-colors">inşa.systems</a>, bir güven kurumu olan <a href="https://www.turkkep.com.tr" target="_blank" rel="noopener noreferrer" className="text-green-400 font-medium hover:text-white transition-colors">TÜRKKEP</a>'in yetkili başvuru merkezidir. Ve TÜRKKEP TBM olarak kurumların dijital dönüşüm süreçlerinde;
              <span className="text-blue-400 font-medium"> e-Maliye</span> ve <span className="text-green-400 font-medium">e-Bilişim</span> odağında,
              E-Dönüşüm Çözümlerini, e-donusum.company üzerinden sunar.
            </p>
          </div>

          {/* Ana navigasyon */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6">
            <a href="/" className="hover:text-white transition-colors text-sm md:text-base">Ana Sayfa</a>
            <a href="/e-maliye" className="hover:text-white transition-colors text-sm md:text-base">e-Maliye</a>
            <a href="/e-bilisim" className="hover:text-white transition-colors text-sm md:text-base">e-Bilişim</a>
            <a href="/hakkimizda" className="hover:text-white transition-colors text-sm md:text-base">Hakkımızda</a>
            <a href="/#iletisim" className="hover:text-white transition-colors text-sm md:text-base">İletişim</a>
          </div>

          {/* Hukuki linkler */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-4 md:mb-6 pt-4 border-t border-gray-800">
            <a href="/kvkk" className="hover:text-white transition-colors text-xs md:text-sm">KVKK Aydınlatma Metni</a>
            <span className="text-gray-700">|</span>
            <a href="/gizlilik" className="hover:text-white transition-colors text-xs md:text-sm">Gizlilik Politikası</a>
            <span className="text-gray-700">|</span>
            <a href="/cerez-politikasi" className="hover:text-white transition-colors text-xs md:text-sm">Çerez Politikası</a>
            <span className="text-gray-700">|</span>
            <a href="/kullanim-kosullari" className="hover:text-white transition-colors text-xs md:text-sm">Kullanım Koşulları</a>
          </div>

          <p className="mb-2 text-sm md:text-base"><a href="/" className="hover:text-white transition-colors">e-donusum.company powered by insa.systems</a> | <a href="https://www.turkkep.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TÜRKKEP TBM</a> Yetkili Başvuru Merkezi</p>
          <p className="text-sm">© 2025 MC Teknoloji Danışmanlık ve Eğitim A.Ş. Tüm Hakları Saklıdır | İstanbul/Türkiye</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/905332646642?text=Merhaba%2C%20e-D%C3%B6n%C3%BC%C5%9Fm%20%C3%A7%C3%B6z%C3%BCmleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-2xl">💬</a>
    </>
  );
}
