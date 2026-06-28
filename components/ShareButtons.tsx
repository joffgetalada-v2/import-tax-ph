'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

const BASE_URL = 'https://importtaxph.com';

interface ShareButtonsProps {
  title?: string;
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function ViberIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.997 0C5.372 0 0 5.372 0 11.997c0 2.49.75 4.862 2.118 6.86L.756 23.244l4.553-1.334A11.923 11.923 0 0 0 11.997 24C18.622 24 24 18.628 24 11.997 24 5.372 18.622 0 11.997 0zm5.847 16.35c-.179.497-.998 1.003-1.384 1.044-.365.041-.753.093-2.365-.526-2.068-.81-3.416-2.836-3.521-2.969-.1-.134-.853-1.134-.853-2.162 0-1.028.534-1.532.728-1.74a.74.74 0 0 1 .553-.262c.14 0 .28.003.403.009.128.006.304-.049.478.363.178.416.603 1.478.656 1.584.05.103.084.225.016.362-.069.141-.1.228-.2.35-.097.119-.203.265-.29.356-.097.097-.2.203-.085.397.116.197.512.847 1.1 1.372.755.672 1.391.881 1.588.978.196.094.309.081.422-.047.116-.131.494-.581.625-.778.131-.2.263-.163.44-.1.178.063 1.134.535 1.328.631.197.097.328.147.378.228.047.081.047.466-.131.963z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ShareButtons({
  title = 'ImportTaxPH — Free Philippine Customs Duty & VAT Calculator',
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const url = `${BASE_URL}${pathname}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(title);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const el = document.createElement('textarea');
      el.value = url;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  const platforms = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: '#1877f2',
      icon: <FacebookIcon />,
    },
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      bg: '#000000',
      icon: <XIcon />,
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`,
      bg: '#25d366',
      icon: <WhatsAppIcon />,
    },
    {
      name: 'Viber',
      href: `viber://forward?text=${encodeURIComponent(`${title} ${url}`)}`,
      bg: '#7360f2',
      icon: <ViberIcon />,
    },
  ];

  return (
    <div className="border-t border-border pt-6">
      <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
        Share this page
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {platforms.map(({ name, href, bg, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${name}`}
            style={{ backgroundColor: bg }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-xs font-semibold hover:opacity-85 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-white"
          >
            {icon}
            {name}
          </a>
        ))}

        <button
          type="button"
          onClick={copyLink}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-navy-100 text-navy-700 hover:bg-navy-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
        >
          {copied ? <CheckIcon /> : <LinkIcon />}
          {copied ? 'Copied!' : 'Copy link'}
        </button>
      </div>
    </div>
  );
}
