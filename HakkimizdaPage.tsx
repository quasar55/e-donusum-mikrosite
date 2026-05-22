import { useEffect, useState } from "react";
import "./HakkimizdaPage.css";

export default function Hakkimizda() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.title = "Hakkımızda | e-Dönüşüm Çözümleriniz için Tek Adres";

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "MC Teknoloji Danışmanlık ve Eğitim A.Ş. bünyesinde TÜRKKEP Yetkili Başvuru Merkezi olarak e-dönüşüm çözümleri sunuyoruz."
    );

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <a className="logo-wrap" href="/">
  <div className="logo-icon">
    <svg
      className="logo-svg"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aboutLogoBg" x1="92" y1="65" x2="420" y2="455" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0d64aa" />
          <stop offset="0.48" stopColor="#063f86" />
          <stop offset="1" stopColor="#05265f" />
        </linearGradient>

        <radialGradient id="aboutLogoInnerGlow" cx="50%" cy="42%" r="58%">
          <stop offset="0" stopColor="#2ba8ee" stopOpacity="0.75" />
          <stop offset="0.62" stopColor="#1267bf" stopOpacity="0.55" />
          <stop offset="1" stopColor="#07306f" stopOpacity="0.25" />
        </radialGradient>

        <filter id="aboutLogoOrbitGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="aboutLogoSignalGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="42" y="42" width="428" height="428" rx="78" fill="url(#aboutLogoBg)" />
      <circle cx="256" cy="270" r="170" fill="url(#aboutLogoInnerGlow)" opacity="0.9" />

      <path d="M139 288 C84 348 64 416 118 424 C164 431 209 396 229 385" fill="none" stroke="#eaffff" strokeWidth="10" strokeLinecap="round" filter="url(#aboutLogoOrbitGlow)" />
      <path d="M294 171 C373 127 438 143 424 213 C418 245 389 278 368 300" fill="none" stroke="#eaffff" strokeWidth="10" strokeLinecap="round" filter="url(#aboutLogoOrbitGlow)" />

      <g fill="none" stroke="#7ff4ff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" filter="url(#aboutLogoSignalGlow)">
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

      <g fill="#0f5d9e" stroke="#8ff7ff" strokeWidth="3" filter="url(#aboutLogoSignalGlow)">
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

  <div className="logo-text-wrap">
    <span className="logo-text-main">e-dönüşüm.company</span>
    <span className="logo-text-sub">e-Dönüşüm Hizmetleri</span>
  </div>
</a>

        <nav>
          <a href="https://www.e-donusum.company/" className="nav-link">
            Ana Sayfa
          </a>
          
          <a href="https://www.e-donusum.company/e-maliye" className="nav-link">
            e-Maliye
          </a>
          <a href="https://www.e-donusum.company/e-bilisim" className="nav-link">
            e-Bilişim
          </a>
          <a href="https://www.e-donusum.company/hakkimizda" className="nav-link">
            Hakkımızda
          </a>
          <a href="#iletisim" className="nav-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5 19.79 19.79 0 01.12 4.18 2 2 0 012.1 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.16 6.16l1.27-.44a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            İletişim
          </a>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Menü"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <a href="https://www.e-donusum.company/">🏠 Ana Sayfa</a>
        <a href="https://www.e-donusum.company/hakkimizda">🏢 Hakkımızda</a>
        <a href="https://www.e-donusum.company/e-maliye">📊 e-Maliye</a>
        <a href="https://www.e-donusum.company/e-bilisim">💻 e-Bilişim</a>
        <a href="#iletisim" className="m-cta">
          📞 İletişim
        </a>
      </div>

      <div className="hero">
        <div className="hero-badge">⭐ TÜRKKEP Yetkili Başvuru Merkezi</div>
        <h1>
          Dijital Dönüşümünüzde
          <br />
          Güvenilir İş Ortağınız
        </h1>
        <p className="hero-sub">
          MC Teknoloji Danışmanlık ve Eğitim A.Ş. bünyesinde, inşa.systems'in
          e-dönüşüm çözüm platformu olarak işletmenizin dijital geleceğini
          birlikte inşa ediyoruz.
        </p>
        <div className="hero-actions">
          <a href="https://www.e-donusum.company/e-maliye" className="btn-white">
            e-Maliye Çözümleri →
          </a>
          <a href="https://www.e-donusum.company/e-bilisim" className="btn-outline">
            e-Bilişim Çözümleri →
          </a>
        </div>
      </div>

      <section
        id="hakkimizda"
        style={{
          background: "linear-gradient(160deg, #1E3A8A 0%, #2563EB 100%)",
        }}
      >
        <div className="section-inner">
          <div className="about-split">
            <div className="about-text">
              <span className="section-tag" style={{ color: "rgba(255,255,255,.7)" }}>
                Biz Kimiz
              </span>
              <h2 className="section-title" style={{ color: "#fff" }}>
                Dijital Dönüşümde
                <br />
                Uçtan Uca Çözüm Ortağınız
              </h2>
              <p>
                <strong style={{ color: "#fff" }}>e-donusum.company</strong>, MC
                Teknoloji Danışmanlık ve Eğitim A.Ş.'nin teknoloji ve dijital
                dönüşüm alanındaki çözüm platformudur. Türkiye'nin lider kayıtlı
                elektronik posta ve e-dönüşüm hizmet sağlayıcısı{" "}
                <strong style={{ color: "#fff" }}>TÜRKKEP</strong> ile stratejik
                iş birliği içinde, kurumların dijital dönüşümünü uçtan uca
                yönetiyoruz.
              </p>
              <p>
                KEP, e-Fatura, e-İmza, e-Arşiv, e-Defter, e-Saklama ve KEP İK
                çözümlerine danışmanlık ve teknik desteğimizle tek noktadan
                erişim sağlıyoruz. Ancak yaptığımız işler bununla sınırlı değil —
                işletmenizin ihtiyaç duyduğu her dijital adımda yanınızdayız.
              </p>

              <hr className="about-divider" />

              <div className="about-mini-cards">
                <div className="mini-card">
                  <span className="mini-card-icon">🔗</span>
                  <div>
                    <h5>Sistem Entegrasyonu</h5>
                    <p>
                      Farklı yazılım ve donanım çözümlerini mevcut altyapınızla
                      sorunsuz bir araya getiriyoruz. İş süreçlerinizi optimize
                      ederek veri akışınızı ve ekip içi iletişiminizi
                      güçlendiriyoruz.
                    </p>
                  </div>
                </div>

                <div className="mini-card">
                  <span className="mini-card-icon">☁️</span>
                  <div>
                    <h5>Bulut İş Yazılımı</h5>
                    <p>
                      CRM, e-Ticaret, muhasebe, envanter, satış noktası, proje
                      yönetimi ve ERP dahil şirketinizin tüm operasyonlarını tek
                      platformdan yönetmenizi sağlayan açık kaynak çözümler
                      sunuyoruz.
                    </p>
                  </div>
                </div>

                <div className="mini-card">
                  <span className="mini-card-icon">📍</span>
                  <div>
                    <h5>Lokasyon Destekli İş Takibi</h5>
                    <p>
                      İşinizi buluta taşıyın, saha ve ofisten aynı anda yönetin.
                      Her sektöre uygun arayüzleriyle ekiplerinizi, süreçlerinizi
                      ve müşterilerinizi her yerden takip edin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-visual">
              <span className="big-em">🏢</span>
              <h4>
                MC Teknoloji Danışmanlık
                <br />
                ve Eğitim A.Ş.
              </h4>
              <p>İstanbul / Türkiye</p>
              <div className="badge-pill">🛡️ TÜRKKEP Yetkili Bayi</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mv-section">
        <div className="section-inner">
          <span className="section-tag">Değerlerimiz</span>
          <h2 className="section-title">Misyon & Vizyon</h2>
          <p className="section-lead">
            Müşterilerimize en güncel ve yenilikçi teknolojileri getirerek dijital
            süreçlerin verimliliğini ve güvenilirliğini artırıyoruz.
          </p>

          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Misyonumuz</h3>
              <p>
                Türkiye'deki işletmelere en güncel e-dönüşüm teknolojilerini
                getirerek dijital süreçlerin verimliliğini ve yasal güvenilirliğini
                artırmak. Müşterilerimize sektördeki en iyi çözümleri sunarak
                dijital dönüşüm süreçlerinde liderlik etmek.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h3>Vizyonumuz</h3>
              <p>
                e-Dönüşüm ve dijital teknolojiler alanında Türkiye'nin en güvenilir
                ve yenilikçi teknoloji danışmanlık firması olmak. Tüm paydaşlar için
                sürdürülebilir, güvenli ve verimli çözümler sunarak işletmelerin
                dijital geleceğini şekillendirmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="section-inner">
          <div className="partner-box">
            <div>
              <h3>
                MC Teknoloji, TÜRKKEP'in
                <br />
                Yetkili Başvuru Merkezidir
              </h3>
              <p>
                inşa.systems, MC Teknoloji'nin çözüm platformu olarak TÜRKKEP
                ürünlerini uçtan uca danışmanlık ve entegrasyon desteğiyle sunar.
                Bu iş birliği sayesinde kurumlar; KEP, e-Fatura, e-İmza, e-Arşiv,
                e-Defter, e-Saklama ve daha fazlasına <strong>tek noktadan</strong>{" "}
                erişebilmektedir.
              </p>
            </div>

            <div className="partner-logo">
              <div className="partner-logo-box">🛡️</div>
              <span>
                TÜRKKEP
                <br />
                Yetkili Başvuru
                <br />
                Merkezi
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="section-inner">
          <span className="section-tag">Ekibimiz</span>
          <h2 className="section-title">Uzman Kadromuz</h2>

          <div className="quote-card">
            <blockquote>
              "Dijital dönüşüm yalnızca teknolojik bir dönüşüm değil, aynı zamanda
              güven ve yasal geçerlilik gerektiren bir süreçtir. TÜRKKEP ile
              yaptığımız bu stratejik iş birliği, müşterilerimize hem mevzuata tam
              uyumlu hem de verimlilik odaklı çözümler sunmamızı sağlıyor."
            </blockquote>
            <cite>— inşa.systems Yönetimi</cite>
          </div>

          <div className="team-desc">
            <p>
              Başarımızın arkasındaki güç, alanında uzman ve deneyimli ekibimizdir.
              Teknoloji danışmanları, sistem entegratörleri ve müşteri destek
              uzmanlarından oluşan kadromuz, her türlü e-dönüşüm sürecinde en iyi
              çözümleri sunmak için özveriyle çalışmaktadır.
            </p>
            <p>
              Ekibimiz, sektördeki en yeni gelişmeleri yakından takip ederek
              müşterilerimize en güncel ve etkili çözümleri sunar. Profesyonel ve
              dinamik kadromuz, projelerinizin her aşamasında yanınızdadır.
            </p>
          </div>
        </div>
      </section>

      <section id="iletisim" className="contact-section">
        <div className="section-inner">
          <span className="section-tag">İletişim</span>
          <h2 className="section-title">Bizimle İletişime Geçin</h2>
          <p className="section-lead">
            Dijital dönüşüm sürecinizde size özel çözümler için hemen ulaşın.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <div>
                <h4>E-posta</h4>
                <a href="mailto:eaksu.mcteknoloji@tbm.turkkep.com.tr">
                  eaksu.mcteknoloji@tbm.turkkep.com.tr
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Telefon</h4>
                <a href="tel:+905332646642">+90 (533) 264 66 42</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Konum</h4>
                <p>İstanbul / Türkiye</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <div>
                <h4>Sosyal Medya</h4>
                <div className="social-row">
                  <a
                    href="https://www.linkedin.com/company/insasystems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/insa.systems/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-card">
          <a href="https://insa.systems/" target="_blank" rel="noopener noreferrer" className="fc-insa">
            inşa.systems
          </a>
          , bir güven kurumu olan <span className="fc-kep">TÜRKKEP</span>'in
          yetkili başvuru merkezidir. Ve TÜRKKEP TBM olarak kurumların dijital dönüşüm
          süreçlerinde;{" "}
          <a href="https://www.e-donusum.company/e-maliye" className="fc-maliye">
            e-Maliye
          </a>{" "}
          ve{" "}
          <a href="https://www.e-donusum.company/e-bilisim" className="fc-bilisim">
            e-Bilişim
          </a>{" "}
          odağında, E-Dönüşüm Çözümlerini, e-donusum.company üzerinden sunar.
        </div>

        <nav className="footer-nav">
          <a href="https://www.e-donusum.company/">Ana Sayfa</a>
          
          <a href="https://www.e-donusum.company/e-maliye">e-Maliye</a>
          <a href="https://www.e-donusum.company/e-bilisim">e-Bilişim</a>
          <a href="https://www.e-donusum.company/hakkimizda">Hakkımızda</a>
          <a href="#iletisim">İletişim</a>
        </nav>

        <p className="footer-powered">
          e-donusum.company powered by insa.systems | TÜRKKEP TBM Yetkili Başvuru
          Merkezi
        </p>
        <p className="footer-copy">© 2025 Tüm Hakları Saklıdır | İstanbul/Türkiye</p>
      </footer>

      <div className="float-left">
        <button
          className={`float-btn scroll-top ${showScrollTop ? "visible" : ""}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Yukarı çık"
        >
          <span className="tip">Yukarı Çık</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>

      <div className="float-right">
        <a
          className="float-btn whatsapp"
          href="https://wa.me/905332646642?text=Merhaba%2C%20e-d%C3%B6n%C3%BC%C5%9F%C3%BCm%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <span className="tip">WhatsApp ile Yaz</span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  );
}