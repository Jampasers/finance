import Link from 'next/link';
import { AuthForm } from '../../components/auth-form';

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <div className="container auth-wrap">
        <AuthForm mode="register" />

        <section className="panel">
          <p className="section-kicker">Kenapa daftar</p>
          <h2 className="section-title">Biar catatan toko lu mulai rapi dari hari pertama.</h2>
          <p>
            Versi awal ini udah nyiapin pondasi akun. Jadi nanti waktu fitur transaksi, utang, dan
            laporan nambah, data toko lu udah punya tempat yang bener.
          </p>
          <div className="grid-3" style={{ gridTemplateColumns: '1fr' }}>
            <div className="panel">
              <strong>Satu akun satu toko</strong>
              <p>Awal yang aman buat bawa data owner dan toko ke flow berikutnya.</p>
            </div>
            <div className="panel">
              <strong>Validasi udah jalan</strong>
              <p>Email, password, dan nama toko dicek dulu sebelum masuk database.</p>
            </div>
            <div className="panel">
              <strong>API beneran</strong>
              <p>Bukan dummy. Form ini nembak Nest API buat register user baru.</p>
            </div>
          </div>
          <p>
            Mau balik dulu?{' '}
            <Link href="/" style={{ textDecoration: 'underline' }}>
              Balik ke landing page
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

