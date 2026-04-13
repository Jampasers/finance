import Link from 'next/link';

const features = [
  {
    title: 'Kas masuk keluar langsung kebaca',
    body: 'Hari ini lu untung apa bocor, keliatan cepet. Ga perlu bongkar chat sama catatan kertas.',
  },
  {
    title: 'Utang pelanggan ga ilang',
    body: 'Siapa yang ngebon, berapa, kapan. Semua kepegang biar duit lu ga lenyap pelan-pelan.',
  },
  {
    title: 'Kasir simpel buat toko kecil',
    body: 'Input transaksi cepet. Orang toko baru pegang pun ga langsung bingung.',
  },
];

const steps = [
  'Masukkin jualan, belanja, atau kasbon pake bahasa simpel.',
  'Sistem rapihin jadi angka yang gampang dibaca.',
  'Owner langsung liat kondisi toko tanpa nanya satu-satu.',
];

const personas = [
  'Warung harian yang capek ngitung manual tiap malam.',
  'Toko kecil yang mau kasir simpel tanpa dashboard ribet.',
  'Owner yang mau tau uang bocor dari mana secepat mungkin.',
];

const faqs = [
  {
    q: 'Ini buat toko kecil doang?',
    a: 'Paling cocok buat UMKM dan warung yang butuh cepat. Bukan buat sistem akuntansi ribet perusahaan gede.',
  },
  {
    q: 'Bisa dipake buat utang pelanggan?',
    a: 'Bisa. Kasbon pelanggan jadi catatan yang jelas, ga cuma modal inget.',
  },
  {
    q: 'Kalau orang toko gaptek gimana?',
    a: 'Justru ini dibikin buat input sesingkat mungkin. Fokusnya kerja cepet, bukan menu numpuk.',
  },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <Link href="/" className="brand-chip">
            <span className="brand-mark">FW</span>
            <span>Finance Warung</span>
          </Link>

          <nav className="nav-links" aria-label="Navigasi utama">
            <a href="#fitur">Fitur</a>
            <a href="#cara-kerja">Cara kerja</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="button-row">
            <Link href="/login" className="button button-secondary">
              Masuk
            </Link>
            <Link href="/daftar" className="button button-primary">
              Coba gratis
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Kasir + catatan uang buat owner UMKM</span>
              <h1>Uang toko lu jangan sampe kabur diem-diem.</h1>
              <p>
                Finance Warung bantu lu catet jualan, belanja, sama kasbon tanpa ribet. Cepet input,
                cepet kebaca, cepet ketahuan kalau ada bocor.
              </p>
              <div className="button-row">
                <Link href="/daftar" className="button button-primary">
                  Coba gratis
                </Link>
                <a href="#fitur" className="button button-secondary">
                  Liat caranya
                </a>
              </div>
              <div className="hero-points">
                <div className="hero-point">Masuk keluar duit kebaca jelas</div>
                <div className="hero-point">Kasbon pelanggan ga ilang</div>
                <div className="hero-point">Cocok buat toko kecil yang gercep</div>
              </div>
            </div>

            <aside className="hero-card" aria-label="Ringkasan manfaat">
              <div>
                <p className="section-kicker" style={{ color: '#ffd28b' }}>
                  Kondisi toko, cepet kebaca
                </p>
                <h2 className="section-title" style={{ marginBottom: 8 }}>
                  Lu pegang angka. Bukan angka yang pegang lu.
                </h2>
                <p>
                  Dashboard awal fokus ke yang penting dulu: duit masuk, duit keluar, sama siapa yang
                  masih ngutang.
                </p>
              </div>
              <div>
                <div className="metric">
                  <span>Input transaksi</span>
                  <strong>&lt; 10 dtk</strong>
                </div>
                <div className="metric">
                  <span>Status kasbon</span>
                  <strong>rapi</strong>
                </div>
                <div className="metric">
                  <span>Rasa pake</span>
                  <strong>ga bikin mumet</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container grid-3">
            <div className="panel">
              <strong>Dipake owner yang maunya jelas</strong>
              <p>Warung, toko kelontong, konter kecil, sampai usaha rumahan yang capek catet manual.</p>
            </div>
            <div className="panel">
              <strong>Bukan dashboard sok keren</strong>
              <p>Yang diprioritasin cuma yang bikin lu bisa ambil keputusan hari itu juga.</p>
            </div>
            <div className="panel">
              <strong>Bahasa manusia, bukan istilah ribet</strong>
              <p>Orang toko langsung paham harus ngapain tanpa training kepanjangan.</p>
            </div>
          </div>
        </section>

        <section className="section" id="fitur">
          <div className="container">
            <p className="section-kicker">Fitur inti</p>
            <h2 className="section-title">Yang penting ada dulu. Yang ribet belakangan.</h2>
            <div className="grid-3">
              {features.map((feature) => (
                <article className="panel" key={feature.title}>
                  <strong>{feature.title}</strong>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="cara-kerja">
          <div className="container">
            <p className="section-kicker">Cara kerja 3 langkah</p>
            <h2 className="section-title">Cepet masukin. Cepet ngerti. Cepet gerak.</h2>
            <div className="grid-3">
              {steps.map((step, index) => (
                <article className="panel" key={step}>
                  <strong>0{index + 1}</strong>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid-2">
            <div>
              <p className="section-kicker">Siapa yang cocok</p>
              <h2 className="section-title">Kalau lu capek catatan toko berantakan, ini buat lu.</h2>
            </div>
            <div className="grid-3" style={{ gridTemplateColumns: '1fr' }}>
              {personas.map((persona) => (
                <article className="panel" key={persona}>
                  <strong>Cocok buat</strong>
                  <p>{persona}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-kicker">Testimoni rasa nyata</p>
            <h2 className="section-title">Bukan teori. Ini efeknya kalau toko jadi rapi.</h2>
            <div className="grid-3">
              <blockquote className="quote-card">
                <strong>Warung kopi pinggir jalan</strong>
                <p>
                  “Dulu malem bingung duit kurang ke mana. Sekarang tinggal buka catatan, langsung
                  keliatan.”
                </p>
              </blockquote>
              <blockquote className="quote-card">
                <strong>Toko sembako rumahan</strong>
                <p>“Kasbon pelanggan jadi ketagih pelan-pelan, soalnya daftar namanya udah rapi.”</p>
              </blockquote>
              <blockquote className="quote-card">
                <strong>Owner konter kecil</strong>
                <p>“Enak. Orang toko tinggal masukin transaksi. Gua tinggal cek hasil.”</p>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">Pertanyaan yang biasanya muncul</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-band">
              <p className="section-kicker" style={{ color: '#fff5dc' }}>
                Final CTA
              </p>
              <h2 className="section-title">Toko kecil juga wajib punya catatan yang waras.</h2>
              <p>
                Mulai dari yang dasar dulu. Daftar gratis, tes alurnya, terus liat sendiri seberapa
                banyak ribet yang kepotong.
              </p>
              <div className="button-row">
                <Link href="/daftar" className="button button-secondary">
                  Coba gratis sekarang
                </Link>
                <Link href="/login" className="button button-secondary">
                  Udah punya akun
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="sticky-mobile">
        <Link href="/daftar" className="button button-primary">
          Coba gratis
        </Link>
      </div>
    </div>
  );
}

