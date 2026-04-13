import Link from 'next/link';
import { AuthForm } from '../../components/auth-form';

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="container auth-wrap">
        <AuthForm mode="login" />

        <section className="panel">
          <p className="section-kicker">Masuk lagi</p>
          <h2 className="section-title">Balik cek toko tanpa muter-muter.</h2>
          <p>
            Endpoint login udah nyiapin token akses dasar. Jadi nanti waktu dashboard sama data toko
            masuk, alur aksesnya udah punya pondasi.
          </p>
          <div className="grid-3" style={{ gridTemplateColumns: '1fr' }}>
            <div className="panel">
              <strong>JWT dasar</strong>
              <p>Login balikin token yang siap dipake ke flow protected route berikutnya.</p>
            </div>
            <div className="panel">
              <strong>Password di-hash</strong>
              <p>Password user ga disimpen mentah di database.</p>
            </div>
            <div className="panel">
              <strong>Kontrak shared</strong>
              <p>Web sama API ngomong pake tipe yang sama biar ga meleset.</p>
            </div>
          </div>
          <p>
            Belum daftar?{' '}
            <Link href="/daftar" style={{ textDecoration: 'underline' }}>
              Bikin akun gratis
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
