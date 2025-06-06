// components/Header.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolledPastIntro, setScrolledPastIntro] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 임의로 intro 섹션 높이(예: 400px) 이상 스크롤되면 활성화
      if (window.scrollY > 400) {
        setScrolledPastIntro(true);
      } else {
        setScrolledPastIntro(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black">
      <div className="mx-auto max-w-5xl flex justify-between items-center gap-2 px-5 py-7">
        <Link href="#home" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" width={27} height={27} />
          <span className="text-4xl font-extrabold tracking-wide uppercase">
            Librarium
          </span>
        </Link>

        {scrolledPastIntro && (
          <div className="flex items-center space-x-2 border-gray-500/70 rounded-full border p-1">
            <img src="/mymy.png" width={32} height={32} className="rounded-full" />

            <span className="text-white text-sm font-medium">Seokhun Jeon</span>
            <a
              href="mailto:seokhun.jeon@keti.re.kr"
              className="text-gray-200 border border-gray-600 p-1.5 rounded-full hover:bg-gray-800 transition"
            >
              <img src="/mail.svg" width={20} height={20} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}