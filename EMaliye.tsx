import { FileText, CheckCircle, ArrowRight, Shield, Zap, Clock, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';

// Logo Component
function Logo({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center">
        <svg
          className="w-full h-full"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="emaliyeLogoBg" x1="92" y1="65" x2="420" y2="455" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#0d64aa" />
              <stop offset="0.48" stopColor="#063f86" />
              <stop offset="1" stopColor="#05265f" />
            </linearGradient>

            <radialGradient id="emaliyeLogoInnerGlow" cx="50%" cy="42%" r="58%">
              <stop offset="0" stopColor="#2ba8ee" stopOpacity="0.75" />
              <stop offset="0.62" stopColor="#1267bf" stopOpacity="0.55" />
              <stop offset="1" stopColor="#07306f" stopOpacity="0.25" />
            </radialGradient>

            <filter id="emaliyeLogoOrbitGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="emaliyeLogoSignalGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect x="42" y="42" width="428" height="428" rx="78" fill="url(#emaliyeLogoBg)" />
          <circle cx="256" cy="270" r="170" fill="url(#emaliyeLogoInnerGlow)" opacity="0.9" />

          <path
            d="M139 288 C84 348 64 416 118 424 C164 431 209 396 229 385"
            fill="none"
            stroke="#eaffff"
            strokeWidth="10"
            strokeLinecap="round"
            filter="url(#emaliyeLogoOrbitGlow)"
          />

          <path
            d="M294 171 C373 127 438 143 424 213 C418 245 389 278 368 300"
            fill="none"
            stroke="#eaffff"
            strokeWidth="10"
            strokeLinecap="round"
            filter="url(#emaliyeLogoOrbitGlow)"
          />

          <g
            fill="none"
            stroke="#7ff4ff"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
            filter="url(#emaliyeLogoSignalGlow)"
          >
            <path d="M104 397 C133 405 158 403 181 386 L214 373" />
            <path d="M113 378 C126 346 142 324 160 304" />
            <path d="M130 396 C123 371 137 340 157 324" />
            <path d="M143 385 L169 335" />
            <path d="M152 410 L184 411 L197 402" />
            <path d="M321 180 C347 166 371 157 396 161" />
            <path d="M333 195 C359 181 385 173 410 181" />
            <path d="M356 164 L369 146 L397 150" />
            <path d="M385 188 C407 202 395 238 372 270" />
            <path d="M419 193 C415 224 400 254 383 278" />
          </g>

          <g fill="#0f5d9e" stroke="#8ff7ff" strokeWidth="3" filter="url(#emaliyeLogoSignalGlow)">
            <circle cx="105" cy="398" r="4.8" />
            <circle cx="116" cy="354" r="4.8" />
            <circle cx="138" cy="319" r="4.8" />
            <circle cx="156" cy="411" r="4.8" />
            <circle cx="197" cy="402" r="4.8" />
            <circle cx="214" cy="373" r="4.8" />
            <circle cx="328" cy="178" r="4.8" />
            <circle cx="369" cy="146" r="4.8" />
            <circle cx="397" cy="150" r="4.8" />
            <circle cx="410" cy="181" r="4.8" />
            <circle cx="398" cy="237" r="4.8" />
            <circle cx="372" cy="270" r="4.8" />
          </g>

          <path
            d="M260 185 C188 185 144 231 144 300 C144 370 195 416 265 416 C310 416 347 399 375 368 L342 336 C321 357 297 368 266 368 C224 368 197 346 190 311 H392 C396 235 347 185 260 185 Z M260 232 C295 232 320 252 329 282 H192 C202 251 227 232 260 232 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <a href="/" className="hover:opacity-80 transition-opacity">
        <div className="text-xl font-bold leading-tight text-gray-900">
          e-dönüşüm.company
        </div>
        <div className="text-xs transition-colors text-blue-600">
          e-Dönüşüm Hizmetleri
        </div>
      </a>
    </div>
  );
}

// Navigation Bar
// DEĞİŞİKLİK: İletişim butonu window.location.href ile zorla yönlendiriyor
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const goToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/#iletisim';
  };

  return (
<nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Logo scrolled={scrolled} />
        </a>
        <div className="hidden md:flex items-center gap-6 text-gray-700 text-sm">
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
      <a href="https://wa.me/905332646642?text=Merhaba" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-4 z-50 bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl text-2xl">💬</a>
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
