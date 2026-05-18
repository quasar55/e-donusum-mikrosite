import { FileText, CheckCircle, ArrowRight, Shield, Zap, Clock, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';

// Logo Component
function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">i</span>
      </div>
      <a href="/" className="hover:opacity-80 transition-opacity">
        <div className="text-xl font-bold text-white leading-tight">inşa.systems</div>
        <div className="text-xs text-blue-200">e-Dönüşüm Çözümleri</div>
      </a>
    </div>
  );
}

// Navigation Bar
// DEĞİŞİKLİK: İletişim butonu window.location.href ile zorla yönlendiriyor
function Navbar() {
  const goToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/#iletisim';
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Logo />
        </a>
        <div className="hidden md:flex items-center gap-6 text-white/80 text-sm">
          <a href="/" className="hover:text-white transition-colors">Ana Sayfa</a>
          <a href="/e-maliye" className="hover:text-white transition-colors font-medium">e-Maliye</a>
          <a href="/e-bilisim" className="hover:text-white transition-colors">e-Bilişim</a>
          <a
            href="/#iletisim"
            onClick={goToContact}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition-colors cursor-pointer"
          >
            İletişim
          </a>
        </div>
      </div>
    </nav>
  );
}

const services = [
  {
    title: 'e-Fatura',
    icon: FileText,
    description: 'Elektronik fatura ile kağıt tüketimini azaltın, hata oranlarını minimize edin ve fatura süreçlerinizi hızlandırın. GİB onaylı güvenli altyapı ile yasal geçerlilik garantisi.',
    features: ['Yasal geçerlilik (GİB onaylı)', 'Anlık iletim ve onay', 'Maliyet tasarrufu (kağıt, baskı, posta)', 'Hata oranı minimize', 'Kolay entegrasyon', '7/24 erişim']
  },
  {
    title: 'e-Arşiv Fatura',
    icon: FileText,
    description: 'Milyonlarca faturayı güvenle arşivleyin, istediğiniz zaman kolayca erişin. Yasal saklama süreleri boyunca verilerinizi koruyun ve mali denetimlere hazır olun.',
    features: ['10 yıla kadar saklama', 'Hızlı arama ve filtreleme', 'Fiziksel arşiv maliyeti yok', 'Mali denetim desteği', 'Güvenli bulut depolama', 'Otomatik yedekleme']
  },
  {
    title: 'e-İrsaliye',
    icon: FileText,
    description: 'Sevkiyat süreçlerinizi dijitalleştirerek lojistik verimliliğinizi artırın. Stok takibini kolaylaştırın, hata riskini minimize edin ve iş süreçlerinizi hızlandırın.',
    features: ['Zaman tasarrufu', 'Stok yönetimi', 'Hata azaltma', 'İzlenebilirlik', 'Lojistik maliyet düşüşü', 'e-Fatura ile entegre']
  },
  {
    title: 'e-Defter',
    icon: FileText,
    description: 'Yasal defterlerinizi elektronik ortamda tutun. Mali denetim süreçlerini kolaylaştırın, fiziksel depolama maliyetlerinden kurtulun.',
    features: ['Dijital arşiv imkanı', 'Hızlı erişim', 'Mali denetim kolaylığı', 'Maliyet avantajı', 'Yasal uyumluluk', 'Güvenli depolama']
  },
  {
    title: 'e-Müstahsil Makbuzu',
    icon: FileText,
    description: 'Çiftçi ve tedarikçilerden yapılan alımlarda e-makbuz ile yasal uyumluluğu sağlayın. Brüt kâr hesaplamasını otomatik yapın.',
    features: ['Yasal geçerlilik', 'Hızlı işlem', 'Brüt kâr hesaplama', 'Muhasebe entegrasyonu', 'Zaman damgası', 'Arşivleme']
  },
  {
    title: 'e-Serbest Meslek Makbuzu',
    icon: FileText,
    description: 'Serbest meslek erbabının hizmet faturalarını elektronik olarak düzenleyin ve gönderin. Düşük maliyet, hızlı işlem avantajı.',
    features: ['Düşük işlem maliyeti', 'Hızlı işlem', 'Kolay yönetim', 'E-arşiv desteği', 'Yasal geçerlilik', 'Otomatik bildirim']
  },
  {
    title: 'e-Saklama',
    icon: FileText,
    description: 'Tüm elektronik belgelerinizi yasal süreler boyunca güvenle saklayın. KEP, e-Fatura, e-Defter ve e-Arşiv Fatura verilerinizi tek merkezden yönetin.',
    features: ['10 yıl yasal saklama', 'Güvenli altyapı', 'Kolay erişim', 'GİB onaylı', 'Alan tasarrufu', 'Veri bütünlüğü']
  },
  {
    title: 'Mali Müşavir Paketi',
    icon: FileText,
    description: 'Mali müşavirleriniz için özel olarak tasarlanmış kapsamlı e-dönüşüm çözümü. Çoklu firma desteği, gelişmiş raporlama ve kolay entegrasyon.',
    features: ['Çoklu firma desteği', 'Gelişmiş raporlama', 'Kolay entegrasyon', 'Eğitim desteği', '7/24 destek', 'Maliyet avantajı']
  }
];

const advantages = [
  { icon: Shield, title: 'GİB Onaylı', desc: 'Gelir İdaresi Başkanlığı tarafından yetkilendirilmiş özel entegratör' },
  { icon: Clock, title: 'Hızlı İşlem', desc: 'Anlık gönderim ve onay, beklemeye son' },
  { icon: DollarSign, title: 'Maliyet Avantajı', desc: 'Kağıt, baskı ve posta masraflarından tasarruf' },
  { icon: Zap, title: '7/24 Erişim', desc: 'Her zaman, her yerden belgelerinize erişin' },
];

export default function EMaliye() {
  // DEĞİŞİKLİK: Yukarı ok butonu için React state
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // DEĞİŞİKLİK: Tüm iletişim butonları için yönlendirme fonksiyonu
  const goToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/#iletisim';
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 overflow-hidden">
        <Navbar />

        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-40 h-40 rounded-full bg-blue-500 animate-float-slow"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-32 h-32 rounded-full bg-green-500 animate-float-reverse"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 pt-12">
          <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
            <FileText className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">e-Maliye Çözümleri</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Fatura, irsaliye, defter ve arşiv süreçlerinizi tamamen dijitalleştirin.
            Manuel işlemleri ortadan kaldırarak zaman ve maliyet tasarrufu sağlayın.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">✓ GİB Onaylı</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">✓ Güvenli Altyapı</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">✓ Hızlı Entegrasyon</span>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advantages.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <item.icon className="text-blue-600" size={20} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                  <div className="text-xs text-gray-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">e-Maliye Hizmetleri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tüm e-belge süreçlerinizi tek noktadan yönetin. Yasal geçerliliği garantili,
              güvenli ve uygun fiyatlı çözümlerle işletmenizi dijitalleştirin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all hover:-translate-y-1 scroll-animate"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <service.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Box - DEĞİŞİKLİK: Danışmanlık butonu da düzeltildi */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">e-Fatura Zorunluluğu Hakkında</h2>
            <p className="text-blue-100 mb-4">
              2014 yılından bu yana belirli işletme türleri ve cirolar için e-fatura kullanımı zorunlu tutulmaktadır.
              2023 ve 2024 yıllarında bu kapsam genişletilmiş, daha fazla mükellef e-dönüşüm sürecine dahil edilmiştir.
            </p>
            <p className="text-blue-100 mb-6">
              İşletmenizin e-fatura veya diğer e-belge kullanımı zorunlu mu? Size en uygun çözümü belirlemek için
              danışmanlarımızla iletişime geçin.
            </p>
            <a
              href="/#iletisim"
              onClick={goToContact}
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              Ücretsiz Danışmanlık Alın <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA - DEĞİŞİKLİK: İletişim butonu window.location ile yönlendiriyor */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">e-Maliye Dönüşümüne Başlayın</h2>
          <p className="text-xl text-blue-100 mb-8">
            İşletmeniz için en uygun e-maliye çözümlerini belirlemek için bizimle iletişime geçin.
          </p>
          <a
            href="/#iletisim"
            onClick={goToContact}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            İletişime Geçin <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="/" className="hover:text-white transition-colors">Ana Sayfa</a>
            <a href="/e-maliye" className="hover:text-white transition-colors">e-Maliye</a>
            <a href="/e-bilisim" className="hover:text-white transition-colors">e-Bilişim</a>
            <a href="/#iletisim" onClick={goToContact} className="hover:text-white transition-colors cursor-pointer">İletişim</a>
          </div>
          <p className="mb-2"><a href="/" className="hover:text-white transition-colors">inşa.systems</a> | <a href="https://www.turkkep.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TürkKEP</a> Yetkili Başvuru Merkezi</p>
          <p className="text-sm">© 2025 Tüm Hakları Saklıdır</p>
        </div>
{/* WhatsApp Floating Button */}

  href="https://wa.me/905332646642?text=Merhaba%2C%20e-Maliye%20%C3%A7%C3%B6z%C3%BCmleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-4 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce"
  aria-label="WhatsApp ile iletişime geç"
>
  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
      </footer>

      {/* DEĞİŞİKLİK: Yukarı Ok Butonu - React state ile */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-4 md:left-6 z-50 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 ${showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-label="Sayfa başına dön"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

    </div>
  );
}
