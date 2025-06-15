export const metadata = {
  title: 'Seokhun Jeon | Librarium Portfolio',
  description: 'Seokhun Jeon의 기술 스택, 프로젝트, 블로그 이력을 JSON 기반으로 한눈에 볼 수 있는 정적 포트폴리오 사이트',
  openGraph: {
    title: 'Seokhun Jeon | Librarium Portfolio',
    description: '한 페이지에 모든 기술 스펙과 프로젝트가 JSON으로 관리되는 정적 포트폴리오',
    url: 'https://librarium-indol.vercel.app/',
    images: [
      {
        url: 'https://librarium-indol.vercel.app/mymy.png',
        width: 777,
        height: 777,
        alt: 'Librarium Portfolio'
      }
    ],
    siteName: 'Librarium'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seokhun Jeon | Librarium Portfolio',
    description: 'JSON 기반 한 페이지 포트폴리오',
    images: ['https://librarium-indol.vercel.app/mymy.png'],
  },
  alternates: {
    canonical: 'https://librarium-indol.vercel.app/'
  }
};

import Header from '@/components/header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      
      <body>
        <Header />
        <main className="pt-4 mx-auto w-full max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  );
}