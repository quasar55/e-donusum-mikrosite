import LegalLayout from './LegalLayout';

// =============================================
// Kullanım Koşulları — /kullanim-kosullari
// =============================================
export default function KullanimKosullari() {
  return (
    <LegalLayout title="Kullanım Koşulları" updated="2025">
      <p className="text-gray-700 leading-relaxed mb-6">
        www.e-donusum.company ("Site") web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş
        sayılırsınız. Koşulları kabul etmiyorsanız siteyi kullanmamanızı rica ederiz.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Taraflar ve Tanımlar</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Site, <strong>MC Teknoloji Danışmanlık ve Eğitim A.Ş.</strong> ("Şirket") tarafından işletilmektedir.
        Şirket, TÜRKKEP Kayıtlı Elektronik Posta Hizmetleri A.Ş.'nin yetkili başvuru merkezidir.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Hizmetlerin Kapsamı</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Site üzerinden e-dönüşüm hizmetleri (KEP, KEP İK, e-Fatura, e-Arşiv, e-İrsaliye, e-Defter, e-İmza ve
        benzeri çözümler) hakkında bilgilendirme yapılmakta ve başvuru/iletişim imkânı sunulmaktadır. Site
        üzerindeki bilgiler genel bilgilendirme amaçlı olup, kesin teklif niteliği taşımaz.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Fikri Mülkiyet Hakları</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sitedeki tüm içerik, tasarım, logo, metin ve görseller Şirkete veya ilgili hak sahiplerine aittir. İçeriğin
        izinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Sorumluluğun Sınırlandırılması</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Site içeriğinin güncel ve doğru olması için azami özen gösterilir; ancak bilgilerin eksiksizliği veya
        kesintisiz erişilebilirliği garanti edilmez. Sitenin kullanımından doğabilecek dolaylı zararlardan Şirket
        sorumlu tutulamaz.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Üçüncü Taraf Bağlantıları</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriğinden ve gizlilik
        uygulamalarından Şirket sorumlu değildir.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Kişisel Verilerin Korunması</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kişisel verilerinizin işlenmesine ilişkin bilgilere <a href="/kvkk" className="text-blue-600 hover:underline">KVKK Aydınlatma Metni</a> ve
        <a href="/gizlilik" className="text-blue-600 hover:underline"> Gizlilik Politikası</a> sayfalarından ulaşabilirsiniz.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Değişiklikler</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Şirket, bu koşulları önceden bildirmeksizin değiştirme hakkını saklı tutar. Güncel sürüm her zaman bu
        sayfada yayımlanır.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Uygulanacak Hukuk ve Yetki</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bu koşulların yorumlanmasında ve uygulanmasında Türk hukuku geçerlidir. Doğabilecek uyuşmazlıklarda
        İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri yetkilidir.
      </p>
    </LegalLayout>
  );
}
