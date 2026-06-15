import LegalLayout from './LegalLayout';

// =============================================
// Çerez Politikası — /cerez-politikasi
// =============================================
export default function CerezPolitikasi() {
  return (
    <LegalLayout title="Çerez Politikası" updated="2025">
      <p className="text-gray-700 leading-relaxed mb-6">
        Bu Çerez Politikası, www.e-donusum.company ("Site") üzerinde çerezlerin nasıl kullanıldığını açıklar.
        Siteyi kullanarak bu politikada açıklanan çerez kullanımını kabul etmiş olursunuz.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Çerez Nedir?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır.
        Sitenin doğru çalışması, deneyiminizin iyileştirilmesi ve kullanım istatistiklerinin elde edilmesi için
        yaygın olarak kullanılır.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Kullandığımız Çerez Türleri</h2>
      <ul className="text-gray-700 leading-relaxed mb-4 space-y-2 list-disc pl-5">
        <li><strong>Zorunlu çerezler:</strong> Sitenin temel işlevlerini yerine getirebilmesi için gereklidir; devre dışı bırakılamaz.</li>
        <li><strong>Performans / analitik çerezler:</strong> Ziyaretçilerin siteyi nasıl kullandığını anonim olarak ölçer. Bu amaçla Google Analytics hizmetini kullanmaktayız.</li>
        <li><strong>İşlevsel çerezler:</strong> Tercihlerinizi hatırlayarak deneyiminizi kişiselleştirir.</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Üçüncü Taraf Çerezleri</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Site üzerinde Google Analytics gibi üçüncü taraf hizmetler kullanılabilir. Bu hizmetler kendi çerez
        politikalarına tabidir ve topladıkları veriler ilgili sağlayıcının gizlilik politikası çerçevesinde işlenir.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Çerezleri Nasıl Yönetebilirsiniz?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tarayıcınızın ayarlarından çerezleri kabul etme, reddetme veya silme tercihlerinizi her zaman
        değiştirebilirsiniz. Zorunlu çerezlerin devre dışı bırakılması durumunda sitenin bazı bölümleri düzgün
        çalışmayabilir. Çoğu tarayıcıda çerez yönetimi "Ayarlar > Gizlilik" bölümünden yapılabilir.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Değişiklikler</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bu politika zaman zaman güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır. Kişisel
        verilerin işlenmesine ilişkin ayrıntılar için <a href="/kvkk" className="text-blue-600 hover:underline">KVKK Aydınlatma Metni</a> ve
        <a href="/gizlilik" className="text-blue-600 hover:underline"> Gizlilik Politikası</a> sayfalarını inceleyebilirsiniz.
      </p>
    </LegalLayout>
  );
}
