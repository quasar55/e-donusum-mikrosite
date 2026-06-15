import LegalLayout from './LegalLayout';

// =============================================
// Gizlilik Politikası — /gizlilik
// =============================================
export default function Gizlilik() {
  return (
    <LegalLayout title="Gizlilik Politikası" updated="2025">
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>MC Teknoloji Danışmanlık ve Eğitim A.Ş.</strong> olarak gizliliğinize önem veriyoruz. Bu Gizlilik
        Politikası, www.e-donusum.company ("Site") üzerinden topladığımız bilgileri ve bunları nasıl kullandığımızı
        açıklar.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Topladığımız Bilgiler</h2>
      <ul className="text-gray-700 leading-relaxed mb-4 space-y-1 list-disc pl-5">
        <li>İletişim formu aracılığıyla paylaştığınız ad, soyad, e-posta, telefon ve mesaj bilgileri</li>
        <li>Site kullanımına ilişkin teknik veriler (IP adresi, tarayıcı türü, çerez kayıtları)</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Bilgilerin Kullanım Amacı</h2>
      <ul className="text-gray-700 leading-relaxed mb-4 space-y-1 list-disc pl-5">
        <li>Taleplerinize yanıt vermek ve danışmanlık hizmeti sunmak</li>
        <li>Hizmetlerimizi sağlamak ve iyileştirmek</li>
        <li>Yasal yükümlülüklerimizi yerine getirmek</li>
      </ul>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Bilgilerin Paylaşımı</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bilgileriniz; hizmetlerin sunulması için iş ortağımız TÜRKKEP ve altyapı/barındırma tedarikçilerimizle,
        ayrıca yasal zorunluluk hâlinde yetkili kamu kurumlarıyla paylaşılabilir. Bilgileriniz pazarlama amacıyla
        üçüncü taraflara satılmaz.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Veri Güvenliği</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kişisel verilerinizin yetkisiz erişime, kayba veya kötüye kullanıma karşı korunması için uygun teknik ve
        idari tedbirler alınmaktadır.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Çerezler</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Site, çerezler kullanır. Ayrıntılar için <a href="/cerez-politikasi" className="text-blue-600 hover:underline">Çerez Politikası</a> sayfamızı inceleyebilirsiniz.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Haklarınız</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        6698 sayılı KVKK kapsamındaki haklarınız ve bunların nasıl kullanılacağı hakkında bilgi için
        <a href="/kvkk" className="text-blue-600 hover:underline"> KVKK Aydınlatma Metni</a> sayfamıza bakabilirsiniz.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. İletişim</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Gizlilikle ilgili sorularınız için <strong>eaksu.mcteknoloji@tbm.turkkep.com.tr</strong> adresinden bize
        ulaşabilirsiniz.
      </p>
    </LegalLayout>
  );
}
