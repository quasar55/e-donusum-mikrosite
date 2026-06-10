import { useState, useEffect } from 'react';

const sorular = [
  { s: 'e-Fatura kullanmak için özel bir yazılım gerekli mi?', c: 'TürkKEP\'in sunduğu portal veya mevcut muhasebe yazılımınızla entegrasyon seçenekleri mevcuttur. Danışmanlarımız size en uygun çözümü belirleyecektir.' },
  { s: 'KEP hesabı açmak ne kadar sürer?', c: 'Başvuru ve onay süreci genellikle 1-3 iş günü içinde tamamlanır. Gerekli belgeler hazırsa süreç çok daha hızlı ilerler.' },
  { s: 'e-Dönüşüm zorunlu mu?', c: 'Belirli işletme türleri ve cirolar için yasal zorunluluklar bulunmaktadır. Danışmanlarımız sizin için gerekli olan çözümleri belirleyebilir.' },
  { s: 'Maliyetleri nedir?', c: 'Her işletmenin ihtiyaçları farklı olduğundan, fiyatlandırma da buna göre şekillenir. Ücretsiz danışmanlık için bizimle iletişime geçebilirsiniz.' },
  { s: 'e-Arşiv ile e-Fatura arasındaki fark nedir?', c: 'e-Fatura, mükelleflerin birbirine elektronik ortamda gönderdiği belgedir. e-Arşiv ise son tüketiciye veya e-Fatura mükellefi olmayanlara gönderilen elektronik faturadır.' },
  { s: 'e-İrsaliye kullanmak zorunda mıyım?', c: 'Depo işleten ve belirli ciro eşiğini aşan işletmeler için zorunludur. GİB düzenlemelerine göre kapsam genişlemektedir.' },
  { s: 'Mevcut muhasebe programımla entegrasyon mümkün mü?', c: 'Logo, Mikro, Netsis, SAP gibi yaygın muhasebe yazılımlarıyla entegrasyon sağlayabiliyoruz. Detaylar için bize ulaşın.' },
  { s: 'KEP adresi neden önemlidir?', c: 'KEP (Kayıtlı Elektronik Posta), yasal geçerliliği olan elektronik tebligat altyapısıdır. Resmi yazışmalar, sözleşmeler ve tebligatlar için kullanılır.' },
  { s: 'e-Dönüşüm sürecinde veri güvenliği nasıl sağlanır?', c: 'TürkKEP ortaklığımız sayesinde tüm verileriniz şifreli ortamda saklanır. ISO 27001 standartlarına uygun güvenlik protokolleri uygulanır.' },
  { s: 'Kurulum ne kadar sürer?', c: 'Standart kurulumlar genellikle 1-5 iş günü içinde tamamlanır. Büyük ölçekli entegrasyonlar için süre ihtiyaca göre planlanır.' },
  { s: 'e-Müstahsil makbuzu nedir?', c: 'Çiftçilerden ürün satın alan işletmelerin düzenlemesi gereken elektronik belgedir. Tarım sektöründe faaliyet gösterenler için zorunlu hale gelmektedir.' },
  { s: 'Eğitim desteği veriyor musunuz?', c: 'Evet, kurulum sonrasında ekibinize sistem kullanımı konusunda kapsamlı eğitim veriyoruz. Online ve yüz yüze eğitim seçeneklerimiz mevcuttur.' },
  { s: '7/24 teknik destek var mı?', c: 'Evet, tüm paketlerimizde 7/24 teknik destek hizmeti sunulmaktadır. Telefon, e-posta ve online destek kanallarımız aktiftir.' },
  { s: 'GİB entegrasyonu nasıl çalışır?', c: 'Sistemimiz GİB\'in (Gelir İdaresi Başkanlığı) altyapısıyla doğrudan entegre çalışır. Belgeleriniz otomatik olarak GİB\'e iletilir ve onay süreci yönetilir.' },
  { s: 'e-Serbest meslek makbuzu zorunlu mu?', c: 'Serbest meslek erbabı için e-SMM kullanımı GİB tarafından zorunlu hale getirilmektedir. Kapsam her yıl genişlemektedir.' },
  { s: 'Birden fazla şube için tek hesap kullanabilir miyim?', c: 'Evet, merkezi yönetim panelimiz ile tüm şubelerinizi tek hesaptan yönetebilirsiniz. Her şube için ayrı kullanıcı tanımlaması yapılabilir.' },
  { s: 'Verilerimi taşıyabilir miyim?', c: 'Mevcut sisteminizden veri aktarımı için özel migration hizmeti sunuyoruz. Tüm geçmiş belgeleriniz yeni sisteme aktarılabilir.' },
  { s: 'Sözleşme süresi ne kadar?', c: 'Yıllık ve aylık paket seçeneklerimiz mevcuttur. İhtiyacınıza göre esnek sözleşme koşulları sunabiliyoruz.' },
  { s: 'Hangi sektörlere hizmet veriyorsunuz?', c: 'İnşaat, ticaret, üretim, hizmet, sağlık, eğitim başta olmak üzere tüm sektörlerdeki işletmelere hizmet veriyoruz.' },
  { s: 'Ücretsiz deneme imkanı var mı?', c: 'Demo hesap ve ücretsiz danışmanlık hizmeti sunuyoruz. Sistemi canlıda görmek için bizimle iletişime geçin.' },
];

export default function SSS() {
  const [acik, setAcik] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Sıkça Sorulan Sorular | inşa.systems';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white shadow-md">
        <div className="w-full flex items-center justify-between gap-10">
          <a href="/" className="flex items-center gap-3">
  <div className="w-10 h-10 flex items-center justify-center">
    <svg
      className="w-full h-full"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sssLogoBg" x1="92" y1="65" x2="420" y2="455" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0d64aa" />
          <stop offset="0.48" stopColor="#063f86" />
          <stop offset="1" stopColor="#05265f" />
        </linearGradient>

        <radialGradient id="sssLogoInnerGlow" cx="50%" cy="42%" r="58%">
          <stop offset="0" stopColor="#2ba8ee" stopOpacity="0.75" />
          <stop offset="0.62" stopColor="#1267bf" stopOpacity="0.55" />
          <stop offset="1" stopColor="#07306f" stopOpacity="0.25" />
        </radialGradient>

        <filter id="sssLogoOrbitGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="sssLogoSignalGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="42" y="42" width="428" height="428" rx="78" fill="url(#sssLogoBg)" />
      <circle cx="256" cy="270" r="170" fill="url(#sssLogoInnerGlow)" opacity="0.9" />

      <path
        d="M139 288 C84 348 64 416 118 424 C164 431 209 396 229 385"
        fill="none"
        stroke="#eaffff"
        strokeWidth="10"
        strokeLinecap="round"
        filter="url(#sssLogoOrbitGlow)"
      />

      <path
        d="M294 171 C373 127 438 143 424 213 C418 245 389 278 368 300"
        fill="none"
        stroke="#eaffff"
        strokeWidth="10"
        strokeLinecap="round"
        filter="url(#sssLogoOrbitGlow)"
      />

      <g
        fill="none"
        stroke="#7ff4ff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
        filter="url(#sssLogoSignalGlow)"
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

      <g fill="#0f5d9e" stroke="#8ff7ff" strokeWidth="3" filter="url(#sssLogoSignalGlow)">
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

  <div>
    <div className="text-lg font-bold text-gray-900">e-dönüşüm.company</div>
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

      <div className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-gray-500 text-lg">e-Dönüşüm süreçleri hakkında merak ettikleriniz</p>
        </div>

        <div className="space-y-3">
          {sorular.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setAcik(acik === i ? null : i)}
              >
                <span className="font-medium text-gray-800">{item.s}</span>
                <span className={`text-blue-500 text-xl flex-shrink-0 transition-transform ${acik === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {acik === i && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {item.c}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Sorunuzu bulamadınız mı?</h2>
          <p className="text-gray-500 mb-4">Uzman ekibimiz size yardımcı olmaya hazır.</p>
          <a href="/#iletisim" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block">
            Bize Ulaşın
          </a>
        </div>
      </div>
    </div>
  );
}
