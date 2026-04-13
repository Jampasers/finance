import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
  title: 'Finance Warung | Kasir dan catatan uang buat UMKM',
  description:
    'Kasir, catatan uang masuk keluar, dan utang pelanggan. Satu tempat, cepat, jelas, ga ribet.',
  openGraph: {
    title: 'Finance Warung',
    description: 'Kasir dan catatan uang buat owner UMKM yang mau toko rapi tanpa ribet.',
    url: '/',
    siteName: 'Finance Warung',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

