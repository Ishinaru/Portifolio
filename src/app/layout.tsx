import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const BASE_URL = 'https://ishinaru.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'David Vinícius | Fullstack Architect',
    template: '%s | David Vinícius',
  },
  description:
    'Arquiteto Fullstack especialista em C#, .NET e Java. Transformando requisitos complexos em sistemas escaláveis de alto desempenho.',
  keywords: [
    'Fullstack Developer',
    'Software Architect',
    'C#',
    '.NET',
    'Java',
    'Spring Boot',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'David Vinícius Pereira Lima' }],
  creator: 'David Vinícius Pereira Lima',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'David Vinícius | Portfolio',
    title: 'David Vinícius | Fullstack Architect',
    description:
      'Arquiteto Fullstack especialista em C#, .NET e Java. Transformando requisitos complexos em sistemas escaláveis de alto desempenho.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Vinícius | Fullstack Architect',
    description:
      'Arquiteto Fullstack especialista em C#, .NET e Java. Transformando requisitos complexos em sistemas escaláveis.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: '#8b5cf6',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-primary/30 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
