import { Shield, CheckCircle, ArrowRight, Clock, Globe, Lock, FileCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

// Logo Component
function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 w-12 h-12 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">i</span>
      </div>
      <a href="/" className="hover:opacity-80 transition-opacity">
        <div className="text-xl font-bold text-white leading-tight">inşa.systems</div>
        <div className="text-xs text-green-200">e-Dönüşüm Çözümleri</div>
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
          <a href="/e-maliye" className="hover:text-white transition-colors">e-Maliye</a>
          <a href="/e-bilisim" className="hover:text-white transition-colors font-medium">e-Bilişim</a>
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
    features: ['Yasal geçerlilik (BTK onaylı)', 'Zaman damgası ile kesin kanıt', 'Güvenli iletim ve arşivleme', 'Zamandan ve maliyet tasarrufu', 'Çevre dostu (kağıt tasarrufu)', 'Mahkemelerde geçerli kanıt']
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
  { icon: Shield, title: 'BTK Yetkili', desc: 'Bilgi Teknolojileri ve İletişim Kurumu onaylı' },
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
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">✓ BTK Yetkili KEP Sağlayıcı</span>
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
                    <span className="text-gray-700">BTK tarafından yetkilendirilmiş güvenli altyapı</span>
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
              Tüm hizmetler BTK ve GİB onaylı güvenli altyapılarla sunulmaktadır.
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
            <a href="/#iletisim" onClick={goToContact} className="hover:text-white transition-colors cursor-pointer">İletişim</a>
          </div>
          <p className="mb-2"><a href="/" className="hover:text-white transition-colors">inşa.systems</a> | <a href="https://www.turkkep.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TürkKEP</a> Yetkili Başvuru Merkezi</p>
          <p className="text-sm">© 2025 Tüm Hakları Saklıdır</p>
        </div>

      </footer>
{/* WhatsApp Floating Button */}

  href="https://wa.me/905332646642?text=Merhaba%2C%20e-Bili%C5%9Fim%20%C3%A7%C3%B6z%C3%BCmleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-4 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce text-2xl"
  aria-label="WhatsApp ile iletişime geç">

  💬
</a>
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
