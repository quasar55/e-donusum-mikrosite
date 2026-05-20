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
  { s: 'e-Dönüşüm sürecinde veri güvenliği nasıl sağlanır?', c: 'BTK onaylı altyapımız ve TürkKEP ortaklığımız sayesinde tüm verileriniz şifreli ortamda saklanır. ISO 27001 standartlarına uygun güvenlik protokolleri uygulanır.' },
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
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">i</span>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">inşa.systems</div>
              <div className="text-xs text-blue-600">e-Dönüşüm Çözümleri</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
            <a href="/e-maliye" className="hover:text-blue-600 transition-colors">e-Maliye</a>
            <a href="/e-bilisim" className="hover:text-blue-600 transition-colors">e-Bilişim</a>
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