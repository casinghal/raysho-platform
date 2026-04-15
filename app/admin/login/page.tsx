'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    const res = await fetch('/api/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Incorrect password.');
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#07080c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ background: '#0f1117', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '36px 32px', width: '100%', maxWidth: 380 }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: '#f0b429', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', fontSize: 20 }}>🔐</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#eef0f4', marginBottom: 4 }}>Raysho Admin</div>
          <div style={{ fontSize: 13, color: '#8891a4' }}>Enter your admin password</div>
        </div>
        <form onSubmit={login}>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Admin password"
            autoFocus
            style={{ width: '100%', padding: '12px 14px', background: '#14161f', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 9, color: '#eef0f4', fontSize: 14, fontFamily: 'inherit', marginBottom: 12 }}
          />
          {error && <div style={{ fontSize: 12, color: '#f87171', marginBottom: 12, padding: '8px 12px', background: 'rgba(239,68,68,0.08)', borderRadius: 6, border: '1px solid rgba(239,68,68,0.2)' }}>{error}</div>}
          <button type="submit" disabled={!password || loading}
            style={{ width: '100%', padding: '13px', borderRadius: 9, border: 'none', background: password ? '#f0b429' : '#2a2e3a', color: password ? '#000' : '#3d4455', fontSize: 14, fontWeight: 700, cursor: password ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>
            {loading ? 'Signing in…' : 'Sign in →'}
          </button>
        </form>
      </div>
    </div>
  );
}
