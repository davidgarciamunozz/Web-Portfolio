import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David García - Frontend Developer',
  description: 'David Garcia, Front End developer, based in Colombia',
  keywords: 'David García, Frontend Developer, Desarrollador Web, Portafolio, React, Next.js, Colombia',
  author: 'David García',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
