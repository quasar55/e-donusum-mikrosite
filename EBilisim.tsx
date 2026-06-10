import { Shield, CheckCircle, ArrowRight, Clock, Globe, Lock, FileCheck } from 'lucide-react';
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
  const goToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/#iletisim';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white shadow-md">
      <div className="w-full flex items-center justify-between gap-10">
        <a href="/" className="flex items-center gap-3 shrink-0">
          <Logo />
        </a>
        <div className="hidden md:flex items-center gap-6 text-gray-700 text-sm">
          <a href="/" className="hover:text-white transition-colors">Ana Sayfa</a>
          <a href="/e-maliye" className="hover:text-white transition-colors">e-Maliye</a>
          <a href="/e-bilisim" className="hover:text-white transition-colors font-medium">e-Bilişim</a>
          <a href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</a>
          <a
            href="/#iletisim"
            onClick={goToContact}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white transition-colors cursor-pointer"
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
    title: 'KEP (Kayıtlı Elektronik Posta)',
    description: 'Yasal, hızlı, güvenli ve tasarruflu bir iletişim sistemi. Her türlü bildirim, başvuru, dilekçe, sözleşme, fatura ve ihtar gibi resmi belge paylaşımınızı KEP ile yapın.',
    features: ['Yasal geçerlilik', 'Zaman damgası ile kesin kanıt', 'Güvenli iletim ve arşivleme', 'Zamandan ve maliyet tasarrufu', 'Çevre dostu (kağıt tasarrufu)', 'Mahkemelerde geçerli kanıt']
  },
  {
    title: 'KEP Assist',
    description: 'KEP hesaplarınızı kolayca yönetin, gönderim ve teslim durumlarını anlık takip edin. Kullanıcı dostu arayüzü ile tüm süreçlerinizi tek panelden yönetin.',
    features: ['Kullanıcı dostu arayüz', 'Anlık durum takibi', 'Otomatik bildirimler', 'Raporlama ve analiz', 'Çoklu hesap desteği', 'Kolay arama']
  },
  {
    title: 'KEP İK',
    description: 'İnsan kaynakları departmanları için özel olarak geliştirilen KEP altyapısı. Personel izin, bordro, fesih, bilgilendirme ve resmi tebligat süreçlerini kolay ve yasal şekilde yönetin.',
    features: ['İzin yönetimi bildirimleri', 'Bordro dağıtımı', 'Fesih tebligatları', 'Otomatik arşivleme', 'Yasal geçerlilik', 'Maliyet tasarrufu']
  },
  {
    title: 'KEP Mutabakat',
    description: 'Ticari mutabakat süreçlerinizi KEP üzerinden güvenli ve hızlı şekilde gerçekleştirin. Kağıt süreçlerini ortadan kaldırın, zaman tasarrufu yapın.',
    features: ['Hızlı onay süreci', 'Yasal geçerlilik', 'İzlenebilirlik', 'Maliyet avantajı', 'Otomatik arşiv', 'Kolay raporlama']
  },
  {
    title: 'e-İmza',
    description: 'Elektronik ortamda gerçekleşen işlemlerde kişilerin kimlik bilgilerini doğrulayan ve gönderilen bilginin yolda değişmediğini hukuki olarak garanti eden sistem.',
    features: ['Islak imza ile aynı hukuki geçerlilik', 'Kimlik doğrulama', 'Veri bütünlüğü garantisi', 'Hızlı ve tasarruflu', 'Mobil uyumluluk', 'Fiziki kağıt gereksinimi yok']
  },
  {
    title: 'e-Yazışma Paketi (EYP)',
    description: 'Kurum içi ve kurumlar arası yazışmalarınızı elektronik ortamda güvenli şekilde gerçekleştirin. Resmi yazışmalarınızı dijitalleştirin.',
    features: ['Dijital arşivleme', 'Hızlı iletim', 'Kolay takip', 'Güvenli altyapı', 'Yasal geçerlilik', 'Entegrasyon kolaylığı']
  },
  {
    title: 'Zaman Damgası',
    description: 'Elektronik belgelerinizin oluşturulma ve değiştirilme zamanlarını resmi olarak onaylayın. Dijital belgelerinize kesin zaman kanıtı ekleyin.',
    features: ['Kesin zaman bilgisi', 'Mahkeme desteği', 'Uluslararası standartlar', 'Hukuki geçerlilik', 'Veri bütünlüğü', 'Kolay entegrasyon']
  },
  {
    title: 'KEPPORT',
    description: 'Posta kutunuzu dijital ortamda yönetin, gelen ve giden KEP mesajlarınızı takip edin. Tüm KEP trafiğinizi tek merkezden kontrol edin.',
    features: ['Merkezi yönetim', 'Akıllı filtreleme', 'Gelişmiş arama', 'Otomatik bildirimler', 'Raporlama', 'Mobil erişim']
  }
];

const features = [
  
  { icon: Lock, title: 'Güvenli Altyapı', desc: '256-bit şifreleme ile maksimum güvenlik' },
  { icon: Clock, title: '7/24 Destek', desc: 'Her zaman ulaşabileceğiniz teknik destek' },
  { icon: Globe, title: '81 İl Kapsamı', desc: 'Türkiye\'nin her yerinden erişim' },
];

export default function EBilisim() {
  // DEĞİŞİKLİK: Yukarı ok butonu için React state
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // DEĞİŞİKLİK: CTA bölümü iletişim butonu için yönlendirme fonksiyonu
  const goToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/#iletisim';
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20 px-4 overflow-hidden">
        <Navbar />

        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-40 h-40 rounded-full bg-green-500 animate-float-slow"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-32 h-32 rounded-full bg-emerald-400 animate-float-reverse"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 pt-12">
          <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
            <Shield className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">e-Bilişim Çözümleri</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Resmi yazışmalarınızı güvenli ve yasal geçerliliği olan dijital altyapıyla yönetin.
            KEP ve e-İmza ile iş süreçlerinizi hızlandırın.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
           
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">✓ Yasal Geçerlilik</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">✓ Hızlı Entegrasyon</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-green-50 border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-green-100 p-2 rounded-lg">
                  <item.icon className="text-green-600" size={20} />
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

      {/* KEP Info */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">KEP (Kayıtlı Elektronik Posta) Nedir?</h2>
                <p className="text-gray-600 mb-4">
                  KEP, yasal açıdan geçerli, zaman damgalı ve güvenli bir elektronik posta sistemidir.
                  Resmi yazışmalar, tebligatlar, sözleşmeler ve ticari belgeler için ideal çözümdür.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">Zaman damgası ile kesin kanıt niteliği</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">Mahkemelerde delil olarak kabul edilir</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">Kağıt, baskı ve posta masraflarından tasarruf</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <FileCheck className="text-green-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">KEP Kullanım Alanları</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Resmi tebligatlar</li>
                  <li>• İhale süreçleri</li>
                  <li>• Sözleşme gönderimleri</li>
                  <li>• Bordro ve personel bildirimleri</li>
                  <li>• Hukuki süreçler</li>
                  <li>• Ticari mutabakat</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">e-Bilişim Hizmetleri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              KEP, e-İmza ve diğer e-bilişim çözümleriyle işletmenizin dijital dönüşümünü tamamlayın.
              
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all hover:-translate-y-1 scroll-animate"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <Shield className="text-green-600" size={24} />
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

      {/* CTA - DEĞİŞİKLİK: İletişim butonu window.location ile yönlendiriyor */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">e-Bilişim Dönüşümüne Başlayın</h2>
          <p className="text-xl text-green-100 mb-8">
            İşletmeniz için en uygun e-bilişim çözümlerini belirlemek için bizimle iletişime geçin.
          </p>
          <a
            href="/#iletisim"
            onClick={goToContact}
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2 cursor-pointer"
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
            <a href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</a>
            <a href="/#iletisim" onClick={goToContact} className="hover:text-white transition-colors cursor-pointer">İletişim</a>
          </div>
          <p className="mb-2"><a href="/" className="hover:text-white transition-colors">e-donusum.company powered by insa.systems</a> | <a href="https://www.turkkep.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TÜRKKEP TBM</a> Yetkili Başvuru Merkezi</p>
          <p className="text-sm">© 2025 Tüm Hakları Saklıdır</p>
        </div>

      </footer>
{/* WhatsApp Floating Button */}
      <a href="https://wa.me/905332646642?text=Merhaba" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-4 z-50 bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl text-2xl">💬</a>
      {/* DEĞİŞİKLİK: Yukarı Ok Butonu - React state ile */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-4 md:left-6 z-50 bg-green-600 hover:bg-green-700 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 ${showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-label="Sayfa başına dön"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

    </div>
  );
}
