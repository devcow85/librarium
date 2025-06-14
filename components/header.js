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
  <div className="flex items-center space-x-2">
    {/* 클릭 불가한 텍스트 */}
    <span className="get-in-touch text-sm">
      Get in Touch
    </span>

    {/* 클릭 가능한 아바타 */}
    <a
      href="mailto:seokhun.jeon@keti.re.kr"
      className="
        group
        relative
        w-8 h-8
        rounded-full
        overflow-hidden
        transition-all duration-200 ease-in-out
        cursor-pointer
      "
    >
      <img
        src="/mymy.png"
        alt="mymy"
        className="
          w-full h-full
          object-cover
          transition-opacity duration-200 ease-in-out
          group-hover:opacity-0
        "
      />

      <div
        className="
          absolute inset-0
          flex items-center justify-center
          bg-[var(--brand)]
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200 ease-in-out
        "
      >
        <img
          src="/mail.svg"
          alt="메일 아이콘"
          className="w-5 h-5"
        />
      </div>
    </a>
  </div>
)}
      </div>
    </header>
  );
}