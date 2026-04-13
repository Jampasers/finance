'use client';

import Link from 'next/link';
import { useState, useTransition } from 'react';
import type { AuthLoginInput, AuthRegisterInput, AuthResponse } from '@finance/types';
import { apiFetch } from '../lib/api';

type AuthMode = 'login' | 'register';

type AuthFormProps = {
  mode: AuthMode;
};

const DEFAULT_SUCCESS = 'Masuk beres. Token udah balik dari API.';

export function AuthForm({ mode }: AuthFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const isRegister = mode === 'register';

  function handleSubmit(formData: FormData) {
    setError(null);
    setSuccess(null);

    startTransition(async () => {
      try {
        if (isRegister) {
          const payload: AuthRegisterInput = {
            fullName: String(formData.get('fullName') ?? ''),
            shopName: String(formData.get('shopName') ?? ''),
            email: String(formData.get('email') ?? ''),
            password: String(formData.get('password') ?? ''),
          };

          const result = await apiFetch<AuthResponse>('/auth/register', {
            method: 'POST',
            body: JSON.stringify(payload),
          });

          setSuccess(`Akun jadi buat ${result.user.shopName}. ${DEFAULT_SUCCESS}`);
          return;
        }

        const payload: AuthLoginInput = {
          email: String(formData.get('email') ?? ''),
          password: String(formData.get('password') ?? ''),
        };

        const result = await apiFetch<AuthResponse>('/auth/login', {
          method: 'POST',
          body: JSON.stringify(payload),
        });

        setSuccess(`Halo ${result.user.fullName}, lu udah masuk. ${DEFAULT_SUCCESS}`);
      } catch (submissionError) {
        setError(
          submissionError instanceof Error ? submissionError.message : 'Ada error, coba lagi.',
        );
      }
    });
  }

  return (
    <div className="auth-card">
      <p className="section-kicker">{isRegister ? 'Mulai gratis' : 'Balik kerja lagi'}</p>
      <h1 className="section-title">{isRegister ? 'Bikin akun, gas jualan' : 'Masuk, cek toko'}</h1>
      <p>
        {isRegister
          ? 'Isi dikit. Habis itu lu siap rapiin kas, utang, sama catatan toko.'
          : 'Masuk cepat. Semua catatan toko lu tungguin di dalam.'}
      </p>

      <form
        className="auth-form"
        action={(formData) => {
          handleSubmit(formData);
        }}
      >
        {isRegister ? (
          <>
            <div className="field">
              <label htmlFor="fullName">Nama lu</label>
              <input id="fullName" name="fullName" placeholder="Budi" required />
            </div>
            <div className="field">
              <label htmlFor="shopName">Nama toko</label>
              <input id="shopName" name="shopName" placeholder="Warung Berkah" required />
            </div>
          </>
        ) : null}

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="lu@toko.id" required />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="minimal 8 huruf" required />
        </div>

        {error ? <div className="error-box">{error}</div> : null}
        {success ? <div className="success-box">{success}</div> : null}

        <button className="button button-primary" type="submit" disabled={pending}>
          {pending ? 'Lagi proses...' : isRegister ? 'Coba gratis sekarang' : 'Masuk sekarang'}
        </button>
      </form>

      <p>
        {isRegister ? 'Udah punya akun?' : 'Belum punya akun?'}{' '}
        <Link href={isRegister ? '/login' : '/daftar'} style={{ textDecoration: 'underline' }}>
          {isRegister ? 'Masuk di sini' : 'Daftar gratis'}
        </Link>
      </p>
    </div>
  );
}
