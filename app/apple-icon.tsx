import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e89020',
        borderRadius: '38px',
        color: '#0a0f1e',
        fontSize: 116,
        fontWeight: 700,
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      ₱
    </div>,
    { ...size }
  );
}
