import { FileText, Shield, Clock, Users, CheckCircle, ArrowRight, Star, Zap, Globe, Heart, Mail, Upload, Download, Cloud } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="counter-box">
      <span className="text-3xl md:text-4xl font-bold text-blue-900">{count}{suffix}</span>
    </div>
  );
}

// Animated SVG Document Icon
function AnimatedDocument() {
  return (
    <svg className="w-full h-full max-w-[200px] max-h-[200px] animate-document" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="90" fill="#EFF6FF" className="animate-pulse-glow" />
      <g className="animate-float">
        <rect x="60" y="40" width="80" height="100" rx="8" fill="white" stroke="#3B82F6" strokeWidth="2" />
        <path d="M110 40V80H140" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M140 40V70L110 70" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="75" y1="95" x2="125" y2="95" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
        <line x1="75" y1="108" x2="115" y2="108" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
        <line x1="75" y1="121" x2="120" y2="121" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g className="animate-scale-in" style={{ animationDelay: '1s' }}>
        <circle cx="140" cy="50" r="25" fill="#10B981" />
        <path d="M130 50L137 57L152 42" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              style={{ strokeDasharray: 100, strokeDashoffset: 100, animation: 'checkmark 1s ease-out 1.2s forwards' }} />
      </g>
      <circle cx="40" cy="60" r="5" fill="#3B82F6" className="animate-float-slow hidden md:block" style={{ animationDelay: '0s' }} />
      <circle cx="160" cy="90" r="4" fill="#10B981" className="animate-float-reverse hidden md:block" style={{ animationDelay: '0.5s' }} />
      <circle cx="50" cy="140" r="6" fill="#F59E0B" className="animate-float-slow hidden md:block" style={{ animationDelay: '1s' }} />
      <circle cx="155" cy="145" r="5" fill="#3B82F6" className="animate-float hidden md:block" style={{ animationDelay: '0.3s' }} />
    </svg>
  );
}

// Animated KEP Icon
function AnimatedKEPIcon() {
  return (
    <svg className="w-full h-full max-w-[200px] max-h-[200px]" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="90" fill="#ECFDF5" />
      <g className="animate-float">
        <rect x="40" y="60" width="120" height="80" rx="8" fill="white" stroke="#10B981" strokeWidth="2" />
        <path d="M40 70L100 110L160 70" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 60L100 100L160 60" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
              style={{ strokeDasharray: 300, strokeDashoffset: 0, animation: 'checkmark 2s ease-in-out 0.5s forwards' }} />
      </g>
      <g className="animate-scale-in" style={{ animationDelay: '1s' }}>
        <path d="M100 30L130 45V75C130 95 115 110 100 120C85 110 70 95 70 75V45L100 30Z" fill="#10B981" />
        <path d="M90 75L97 82L112 67" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="animate-float-reverse hidden md:block" style={{ animationDelay: '0.5s' }}>
        <circle cx="155" cy="140" r="20" fill="#F59E0B" />
        <circle cx="155" cy="140" r="16" fill="white" />
        <path d="M155 130V140L162 145" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="30" cy="100" r="4" fill="#10B981" className="animate-float-slow hidden md:block" style={{ animationDelay: '0.2s' }} />
      <circle cx="170" cy="60" r="5" fill="#3B82F6" className="animate-float hidden md:block" style={{ animationDelay: '0.7s' }} />
      <circle cx="45" cy="150" r="4" fill="#F59E0B" className="animate-float-reverse hidden md:block" style={{ animationDelay: '0.4s' }} />
    </svg>
  );
}

// Logo Component
function Logo({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="48" height="48" rx="10" fill="url(#grad)"/>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2563EB"/>
                    <stop offset="100%" stopColor="#1d4ed8"/>
                  </linearGradient>
                </defs>
                <path d="M14 24 C14 18 18 13 24 13 C30 13 34 18 34 24" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <path d="M34 24 C34 30 30 35 24 35 C18 35 14 30 14 24" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <path d="M32 20 L34 24 L38 23" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M16 28 L14 24 L10 25" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
      <a href="/" className="hover:opacity-80 transition-opacity">
        <div className={`text-lg md:text-xl font-bold leading-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>e-dönüşüm.company</div>
        <div className={`text-xs transition-colors ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}>e-Dönüşüm Hizmetleri</div>
      </a>
    </div>
  );
}

// Navigation Bar
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-3 md:py-4 px-4 md:px-6 transition-all duration-500 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Logo scrolled={scrolled} />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className={`transition-colors font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>Ana Sayfa</a>
          <a href="/e-maliye" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>e-Maliye</a>
          <a href="/e-bilisim" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>e-Bilişim</a>
          <a href="/#iletisim" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition-colors">İletişim</a>
        </div>
      </div>
    </nav>
  );
}

// =============================================
// DEĞİŞİKLİK 1: TransformationFlow - Mobil portre düzeltmesi
// Portre mobilde tüm elemanlar görünür, oklar küçük ama mevcut
// =============================================
function TransformationFlow() {
  return (
    <div className="relative w-full mx-auto py-6 md:py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4">
        <div className="text-center">
          <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-4 mb-3 shadow-lg border-2 border-red-200 animate-float-slow">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-20 bg-white rounded-lg shadow-md flex items-center justify-center border-2 border-red-300">
                <FileText className="text-red-500 w-8 h-8" />
              </div>
              <span className="text-red-700 text-sm font-bold">Kağıt Belge</span>
            </div>
          </div>
          <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Geleneksel</div>
          <p className="text-white/80 text-xs mt-1">Yavaş, maliyetli</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center animate-pulse-glow shadow-xl border-4 border-white flex-shrink-0">
          <Zap className="text-white w-7 h-7 md:w-10 md:h-10" />
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4 mb-3 shadow-lg border-2 border-green-300 animate-float">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-20 bg-white rounded-lg shadow-md flex items-center justify-center border-2 border-green-500">
                <Cloud className="text-green-600 w-8 h-8" />
              </div>
              <span className="text-green-700 text-sm font-bold">Dijital</span>
            </div>
          </div>
          <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">e-Dönüşüm</div>
          <p className="text-green-300 text-xs mt-1">Hızlı, güvenli</p>
        </div>
      </div>
    </div>
  );
}
// Floating Particles Component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="particle bg-blue-400 hidden md:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            width: `${5 + Math.random() * 10}px`,
            height: `${5 + Math.random() * 10}px`,
            opacity: 0.1 + Math.random() * 0.2,
          }}
        />
      ))}
    </div>
  );
}

const benefits = [
  {
    icon: Clock,
    title: 'Hızlı Kurulum',
    description: 'Sisteminizi kısa sürede devreye alıyor, iş sürekliliğinizi kesintiye uğratmıyoruz.'
  },
  {
    icon: Shield,
    title: 'Güvenilir Altyapı',
    description: 'BTK ve GİB yetkili TürkKEP altyapısıyla yasal geçerliliği garantili çözümler sunuyoruz.'
  },
  {
    icon: Users,
    title: 'Uzman Ekip Desteği',
    description: 'Deneyimli danışmanlarımız kurulum, entegrasyon ve sonrasında da kesintisiz destek sağlar.'
  },
  {
    icon: Globe,
    title: 'Tüm Sektörlere Uygun',
    description: 'İnşaat, ticaret, üretim, hizmet, sağlık... Her sektör için özelleştirilmiş çözümler.'
  }
];

const process = [
  {
    step: '1',
    title: 'İhtiyaç Analizi',
    description: 'İşletmenizin e-dönüşüm gereksinimlerini belirliyoruz.'
  },
  {
    step: '2',
    title: 'Çözüm Önerisi',
    description: 'Size en uygun hizmet paketini hazırlıyoruz.'
  },
  {
    step: '3',
    title: 'Kurulum & Eğitim',
    description: 'Sistemi kuruyor, ekibinizi eğitiyoruz.'
  },
  {
    step: '4',
    title: 'Kesintisiz Destek',
    description: 'Sonrasında 7/24 teknik destek sağlıyoruz.'
  }
];

const faq = [
  {
    question: 'e-Fatura kullanmak için özel bir yazılım gerekli mi?',
    answer: 'TürkKEP\'in sunduğu portal veya mevcut muhasebe yazılımınızla entegrasyon seçenekleri mevcuttur. Danışmanlarımız size en uygun çözümü belirleyecektir.'
  },
  {
    question: 'KEP hesabı açmak ne kadar sürer?',
    answer: 'Başvuru ve onay süreci genellikle 1-3 iş günü içinde tamamlanır. Gerekli belgeler hazırsa süreç çok daha hızlı ilerler.'
  },
  {
    question: 'e-Dönüşüm zorunlu mu?',
    answer: 'Belirli işletme türleri ve cirolar için yasal zorunluluklar bulunmaktadır. Danışmanlarımız sizin için gerekli olan çözümleri belirleyebilir.'
  },
  {
    question: 'Maliyetleri nedir?',
    answer: 'Her işletmenin ihtiyaçları farklı olduğundan, fiyatlandırma da buna göre şekillenir. Ücretsiz danışmanlık için bizimle iletişime geçebilirsiniz.'
  }
];

// =============================================
// DEĞİŞİKLİK 2: Partner Logoları - Gerçek görseller
// Görselleri public/ klasörüne ekleyin:
//   public/turkkep-logo.png
//   public/btk-logo.png
//   public/gib-logo.png
// =============================================
function TurkKEPLogo() {
  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-lg min-w-[150px]">
      <div className="h-14 w-full flex items-center justify-center mb-2">
        <img
          src="/turkkep.webp"
          alt="TürkKEP"
          className="max-h-full max-w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className="hidden items-center justify-center">
          <svg viewBox="0 0 120 40" className="w-28 h-10">
            <circle cx="20" cy="20" r="18" fill="#10B981" />
            <text x="20" y="25" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">KEP</text>
            <text x="65" y="26" textAnchor="middle" fill="#1a1a1a" fontSize="14" fontWeight="bold">TürkKEP</text>
          </svg>
        </div>
      </div>
      <span className="text-sm font-bold text-gray-800">TürkKEP</span>
      <span className="text-xs text-gray-500 text-center">Yetkili Başvuru Merkezi</span>
    </div>
  );
}

function BTKLogo() {
  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg min-w-[150px]">
      <div className="h-14 w-full flex items-center justify-center mb-2">
        <img
          src="/btk.webp"
          alt="BTK"
          className="max-h-full max-w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className="hidden items-center justify-center">
          <svg viewBox="0 0 80 40" className="w-20 h-10">
            <rect x="2" y="2" width="36" height="36" rx="6" fill="#1e3a8a" />
            <text x="20" y="26" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">BTK</text>
            <text x="58" y="22" textAnchor="middle" fill="#1e3a8a" fontSize="7" fontWeight="bold">BİLGİ</text>
            <text x="58" y="30" textAnchor="middle" fill="#1e3a8a" fontSize="7" fontWeight="bold">TEKNOLOJİ</text>
          </svg>
        </div>
      </div>
      <span className="text-sm font-bold text-gray-800">BTK</span>
      <span className="text-xs text-gray-500 text-center">Onaylı Altyapı</span>
    </div>
  );
}

function GIBLogo() {
  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg min-w-[150px]">
      <div className="h-14 w-full flex items-center justify-center mb-2">
        <img
          src="/gib.webp"
          alt="GİB"
          className="max-h-full max-w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className="hidden items-center justify-center">
          <svg viewBox="0 0 100 40" className="w-24 h-10">
            <circle cx="20" cy="20" r="18" fill="#dc2626" />
            <text x="20" y="26" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">G</text>
            <text x="62" y="16" textAnchor="middle" fill="#1d4ed8" fontSize="7" fontWeight="bold">GELİR İDARESİ</text>
            <text x="62" y="26" textAnchor="middle" fill="#1d4ed8" fontSize="7" fontWeight="bold">BAŞKANLIĞI</text>
          </svg>
        </div>
      </div>
      <span className="text-sm font-bold text-gray-800">GİB</span>
      <span className="text-xs text-gray-500 text-center">e-Fatura Uyumlu</span>
    </div>
  );
}

export default function Home() {
  // =============================================
  // DEĞİŞİKLİK 3: Form durumu + Yukarı ok butonu için React state
  // =============================================
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // =============================================
  // DEĞİŞİKLİK 4: Form gönderimi - Web3Forms ile direkt email
  // web3forms.com'dan ücretsiz key alın ve aşağıya yapıştırın
  // =============================================
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      access_key: '4a391cb9-7e56-42c8-8859-9720545c3c1e', // ← web3forms.com'dan alın
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      subject: `e-Dönüşüm Danışmanlık Talebi - ${formData.get('service') || 'Genel'}`,
      from_name: 'e-donusum.company İletişim Formu',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-24 md:pt-28 pb-16 md:pb-20 px-4 overflow-hidden min-h-screen">
        <Navbar />
        <FloatingParticles />

        <div className="absolute top-20 left-10 opacity-20 hidden md:block">
          <div className="w-40 h-40 rounded-full bg-blue-500 animate-float-slow"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 hidden md:block">
          <div className="w-32 h-32 rounded-full bg-green-500 animate-float-reverse"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 pt-16">
          <div className="inline-flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Star className="text-yellow-400" size={16} />
            <span className="text-sm">TürkKEP Yetkili Başvuru Merkezi</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            e-Dönüşüm Çözümleriniz için Tek Adres
          </h1>

          <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            e-Maliye ve e-Bilişim alanında kapsamlı çözümlerle dijital dönüşümünüzü tamamlayın.
            Zaman, maliyet ve kağıttan tasarruf edin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="#hizmetler" className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 animate-pulse-glow">
              Hizmetlerimiz <ArrowRight size={20} />
            </a>
            <a href="#iletisim" className="bg-white text-blue-900 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all hover:scale-105">
              Ücretsiz Danışmanlık
            </a>
          </div>

          <div className="mt-10 md:mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <TransformationFlow />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 md:py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2 animate-fade-in-left">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Shield className="text-blue-600" size={20} />
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-700">BTK Yetkili KEP Sağlayıcı</span>
            </div>
            <div className="flex items-center gap-2 animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="bg-blue-100 p-2 rounded-lg">
                <CheckCircle className="text-blue-600" size={20} />
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-700">GİB Onaylı Özel Entegratör</span>
            </div>
            <div className="flex items-center gap-2 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="bg-blue-100 p-2 rounded-lg">
                <Zap className="text-blue-600" size={20} />
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-700">1.000.000+ Aktif Kullanıcı</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-green-50 animate-gradient opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="animate-scale-in hover-lift cursor-pointer">
              <AnimatedCounter end={500} suffix="+" />
              <div className="text-gray-600 text-sm">Mutlu Müşteri</div>
            </div>
            <div className="animate-scale-in hover-lift cursor-pointer" style={{ animationDelay: '0.1s' }}>
              <AnimatedCounter end={10} suffix="+" />
              <div className="text-gray-600 text-sm">Yıllık Deneyim</div>
            </div>
            <div className="animate-scale-in hover-lift cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <AnimatedCounter end={17} suffix="+" />
              <div className="text-gray-600 text-sm">e-Hizmet</div>
            </div>
            <div className="animate-scale-in hover-lift cursor-pointer" style={{ animationDelay: '0.3s' }}>
              <AnimatedCounter end={24} suffix="/7" />
              <div className="text-gray-600 text-sm">Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Nasıl Çalışıyoruz?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative bg-white rounded-xl p-4 md:p-6 shadow-md text-center hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4 animate-bounce">
                  {item.step}
                </div>
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-blue-300 w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="hizmetler" className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Türkiye'nin güvenilir e-dönüşüm markası TürkKEP'in yetkili başvuru merkezi olarak,
              tüm e-dönüşüm ihtiyaçlarınız için tek adresteyiz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <a href="/e-maliye" className="bg-white rounded-2xl shadow-lg p-4 md:p-8 border-2 border-transparent hover:border-blue-500 transition-all group animate-fade-in-left">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 mx-auto sm:mx-0">
                  <AnimatedDocument />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">e-Maliye Çözümleri</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                    Fatura, irsaliye, defter ve arşiv süreçlerinizi tamamen dijitalleştirin.
                    Manuel işlemleri ortadan kaldırarak zaman ve maliyet tasarrufu sağlayın.
                  </p>
                  <ul className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                    <li className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle size={16} className="text-green-500"/> e-Fatura</li>
                    <li className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle size={16} className="text-green-500"/> e-Arşiv Fatura</li>
                    <li className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle size={16} className="text-green-500"/> e-İrsaliye</li>
                    <li className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle size={16} className="text-green-500"/> e-Defter</li>
                    <li className="text-blue-500 font-medium group-hover:translate-x-2 transition-transform">+ 4 hizmet daha →</li>
                  </ul>
                </div>
              </div>
            </a>

            <a href="/e-bilisim" className="bg-white rounded-2xl shadow-lg p-4 md:p-8 border-2 border-transparent hover:border-green-500 transition-all group animate-fade-in-right">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 mx-auto sm:mx-0">
                  <AnimatedKEPIcon />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">e-Bilişim Çözümleri</h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                    Resmi yazışmalarınızı güvenli ve yasal geçerliliği olan dijital altyapıyla yönetin.
                    KEP ve e-İmza ile iş süreçlerinizi hızlandırın.
                  </p>
                  <ul className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                    <li className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle size={16} className="text-green-500"/> KEP (Kayıtlı E-Posta)</li>
                    <li className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle size={16} className="text-green-500"/> e-İmza</li>
                    <li className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle size={16} className="text-green-500"/> KEP İK</li>
                    <li className="flex items-center gap-2 justify-center sm:justify-start"><CheckCircle size={16} className="text-green-500"/> e-Yazışma</li>
                    <li className="text-green-600 font-medium group-hover:translate-x-2 transition-transform">+ 5 hizmet daha →</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Sistem Entegrasyonu */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 hidden md:block">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-200 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-blue-400 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="animate-fade-in-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Sistem Entegrasyonu</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Sistem entegrasyonu hizmetimiz, farklı yazılım ve donanım çözümlerinin sorunsuz bir şekilde bir araya getirilmesini sağlamaktadır. Projelerinizin tüm aşamalarında, mevcut sistemlerinizle uyumlu ve etkili çözümler geliştirmek için çalışıyoruz.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                İş süreçlerinizi optimize ederek, verimliliğinizi artırırken, veri akışınızı ve iletişiminizi güçlendiriyoruz. Deneyimli ekibimiz, sistem entegrasyonu süreçlerini titizlikle yöneterek, projelerinizin başarısını garanti altına alır.
              </p>
            </div>

            <div className="animate-fade-in-right">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Diğer Hizmetlerimiz</h3>
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-4 border-l-4 border-blue-500 hover:shadow-xl transition-all">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-blue-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Bulut İş Yazılımı</h4>
                    <p className="text-gray-600 text-sm">
                      Müşteri ilişkileri yönetimi, eTicaret, muhasebe, envanter, satış noktası, proje yönetimi, ERP... gibi şirketinizin tüm ihtiyaçlarını karşılayan açık kaynak işletme uygulamalarımızı keşfedin.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 border-l-4 border-green-500 hover:shadow-xl transition-all">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-green-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Lokasyon Destekli İş Takibi Yazılımı</h4>
                    <p className="text-gray-600 text-sm">
                      İşinizi buluta taşıyın, her yerden yönetin. İster saha, ister ofis her yerde yanınızda! Her sektöre uygun arayüzleri ile her yerden işinizi takip etme fırsatı.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 px-4 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-10 left-20 w-40 h-40 bg-blue-700 rounded-full opacity-30 animate-float-slow"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-blue-700 rounded-full opacity-20 animate-float"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Neden Bizi Tercih Etmelisiniz?</h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-800 rounded-xl p-4 md:p-6 hover:bg-blue-700 transition-all hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-blue-700 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <benefit.icon className="text-blue-300 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{benefit.title}</h3>
                <p className="text-blue-200 text-xs md:text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-blue-800 rounded-xl p-4 md:p-6 flex items-center gap-3 md:gap-4 hover:bg-blue-700 transition-all hover-lift animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Heart className="text-red-400 w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm md:text-base">Çevre Dostu</h4>
                <p className="text-blue-200 text-xs md:text-sm">Kağıt tasarrufuyla doğayı koruyun</p>
              </div>
            </div>
            <div className="bg-blue-800 rounded-xl p-4 md:p-6 flex items-center gap-3 md:gap-4 hover:bg-blue-700 transition-all hover-lift animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Zap className="text-yellow-400 w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm md:text-base">Hızlı Sonuç</h4>
                <p className="text-blue-200 text-xs md:text-sm">Anında işlem, hızlı onay</p>
              </div>
            </div>
            <div className="bg-blue-800 rounded-xl p-4 md:p-6 flex items-center gap-3 md:gap-4 hover:bg-blue-700 transition-all hover-lift animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Globe className="text-green-400 w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm md:text-base">Tüm Türkiye</h4>
                <p className="text-blue-200 text-xs md:text-sm">81 ilde hizmet veriyoruz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logoları */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Güven ve Kalite</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="text-center p-4 md:p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1 md:mb-2">10+</div>
              <p className="text-gray-600 text-xs md:text-sm">Yıllık Deneyim</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-green-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">500+</div>
              <p className="text-gray-600 text-xs md:text-sm">Mutlu Müşteri</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1 md:mb-2">81</div>
              <p className="text-gray-600 text-xs md:text-sm">İl Kapsamı</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">7/24</div>
              <p className="text-gray-600 text-xs md:text-sm">Destek</p>
            </div>
          </div>

          {/* Partner Logoları */}
          <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-6">
            <TurkKEPLogo />
            <BTKLogo />
            <GIBLogo />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
<p className="text-center text-gray-500 mb-8 md:mb-12">Tüm soruları görmek için <a href="/sss" className="text-blue-600 hover:underline font-medium">SSS sayfasını ziyaret edin →</a></p>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white opacity-5 rounded-full animate-float"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 animate-fade-in-up">Dijital Dönüşüme Bugün Başlayın</h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            e-Dönüşüm yolculuğunuzda yanınızdayız. Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
          <a href="/#iletisim" className="bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 inline-flex items-center gap-2 animate-fade-in-up animate-pulse-glow" style={{ animationDelay: '0.4s' }}>
            Ücretsiz Danışmanlık Alın <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">İletişim</h2>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white text-center">
              <h3 className="text-lg md:text-xl font-bold mb-2">Hemen Arayalım</h3>
              <p className="text-white/90 mb-3 md:mb-4 text-sm md:text-base">Uzman danışmanlarımız sorularınızı cevaplamak için hazır</p>
              <a href="tel:+905332646642" className="inline-flex items-center gap-2 bg-white text-green-600 px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold hover:bg-green-50 transition-all hover:scale-105">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +90 (533) 264 66 42
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">İletişim Bilgileri</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 text-gray-700 hover-lift cursor-pointer">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="text-sm md:text-base break-all">eaksu.mcteknoloji@tbm.turkkep.com.tr</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 hover-lift cursor-pointer">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="text-sm md:text-base">+90 (533) 264 66 42</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 hover-lift cursor-pointer">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <span className="text-sm md:text-base">İstanbul, Türkiye</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2 text-gray-700 text-sm md:text-base">
                  <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p>Cumartesi: 10:00 - 14:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </div>
            </div>

            {/* =============================================
                DEĞİŞİKLİK 4: Form - Web3Forms ile direkt email gönderimi
                ============================================= */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Adınız Soyadınız" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                <input type="email" name="email" placeholder="E-posta Adresiniz" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
              </div>
              <input type="tel" name="phone" placeholder="Telefon Numaranız" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
              <select name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white transition-all">
                <option value="">İlgilendiğiniz Hizmeti Seçin</option>
                <option value="KEP (Kayıtlı E-Posta)">KEP (Kayıtlı E-Posta)</option>
                <option value="e-Fatura">e-Fatura</option>
                <option value="e-Arşiv Fatura">e-Arşiv Fatura</option>
                <option value="e-İrsaliye">e-İrsaliye</option>
                <option value="e-Defter">e-Defter</option>
                <option value="e-İmza">e-İmza</option>
                <option value="Diğer">Diğer</option>
              </select>
              <textarea name="message" placeholder="Mesajınız" rows={4} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"></textarea>

              {/* Gönder butonu - duruma göre değişir */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-blue-600 text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? 'Gönderiliyor...' : 'Gönder'}
              </button>

              {/* Başarı mesajı */}
              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm text-center">
                  ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                </div>
              )}

              {/* Hata mesajı */}
              {formStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm text-center">
                  ❌ Gönderilemedi. Lütfen tekrar deneyin veya direkt arayın: +90 (533) 264 66 42
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 md:mb-8 px-4 py-4 md:py-6 bg-gray-800 rounded-xl max-w-3xl mx-auto">
            <p className="text-gray-300 text-sm leading-relaxed">
              <a href="https://insa.systems/" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium hover:text-white transition-colors">inşa.systems</a>, bir güven kurumu olan <a href="https://www.turkkep.com.tr" target="_blank" rel="noopener noreferrer" className="text-green-400 font-medium hover:text-white transition-colors">TürkKEP</a>'in yetkili iş ortağı olarak kurumların dijital dönüşüm süreçlerinde
              <span className="text-blue-400 font-medium"> e-Maliye</span> ve <span className="text-green-400 font-medium">e-Bilişim</span> odağında,
              e-dönüşüm çözümleri sunar.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6">
            <a href="/" className="hover:text-white transition-colors text-sm md:text-base">Ana Sayfa</a>
            <a href="/e-maliye" className="hover:text-white transition-colors text-sm md:text-base">e-Maliye</a>
            <a href="/e-bilisim" className="hover:text-white transition-colors text-sm md:text-base">e-Bilişim</a>
            <a href="/#iletisim" className="hover:text-white transition-colors text-sm md:text-base">İletişim</a>
          </div>
          <p className="mb-2 text-sm md:text-base"><a href="/" className="hover:text-white transition-colors">e-dönüşüm.company</a> | <a href="https://www.turkkep.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TürkKEP</a> Yetkili Başvuru Merkezi</p>
          <p className="text-sm">© 2025 Tüm Hakları Saklıdır | İstanbul/Türkiye</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/905332646642?text=Merhaba%2C%20e-D%C3%B6n%C3%BC%C5%9Fm%20%C3%A7%C3%B6z%C3%BCmleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce text-2xl">💬</a>

      {/* =============================================
          DEĞİŞİKLİK 5: Yukarı Ok Butonu - React state ile (script kaldırıldı)
          ============================================= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-20 md:bottom-6 left-4 md:left-6 z-50 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 ${showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-label="Sayfa başına dön"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

    </div>
  );
}



