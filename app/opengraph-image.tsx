import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0f1e',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '60px 80px',
        position: 'relative',
      }}
    >
      {/* Subtle grid pattern background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(46,65,117,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(46,65,117,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Logo row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          marginBottom: '40px',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 90,
            height: 90,
            background: '#e89020',
            borderRadius: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 60,
            fontWeight: 700,
            color: '#0a0f1e',
          }}
        >
          ₱
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 62, fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>
            ImportTax
            <span style={{ color: '#f0a030' }}>.ph</span>
          </span>
        </div>
      </div>

      {/* Main tagline */}
      <div
        style={{
          fontSize: 36,
          color: '#a8bcec',
          textAlign: 'center',
          maxWidth: 900,
          lineHeight: 1.4,
          position: 'relative',
        }}
      >
        Free Philippine Customs Duty &amp; VAT Calculator
      </div>

      {/* Sub tagline */}
      <div
        style={{
          marginTop: 24,
          fontSize: 26,
          color: '#64748b',
          textAlign: 'center',
          maxWidth: 800,
          position: 'relative',
        }}
      >
        Temu · Shein · AliExpress · Lazada · Shopee · Balikbayan Box
      </div>

      {/* Badge strip */}
      <div
        style={{
          marginTop: 48,
          display: 'flex',
          gap: '16px',
          position: 'relative',
        }}
      >
        {['100% Free', 'No Sign-up', 'Updated 2026', 'CAO 02-2025'].map((badge) => (
          <div
            key={badge}
            style={{
              background: 'rgba(46,65,117,0.4)',
              border: '1px solid rgba(168,188,236,0.2)',
              borderRadius: '999px',
              padding: '8px 20px',
              fontSize: 20,
              color: '#a8bcec',
            }}
          >
            {badge}
          </div>
        ))}
      </div>
    </div>,
    { ...size }
  );
}
