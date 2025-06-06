import Header from '@/components/header';
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      
      <body>
        <Header />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-…"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer" />

        <main className="pt-4 mx-auto w-full max-w-4xl px-6">
          {children}
        </main>
      </body>
    </html>
  );
}