import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { GlobalHeader } from '@/components/global-header'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL('https://luxury28-prototype.vercel.app'),
  title: {
    default: 'Luxury28 | Premium Timepieces',
    template: '%s | Luxury28',
  },
  description: 'Curated luxury watches. Certified authenticity. Limited availability.',
  keywords: ['luxury watches', 'premium timepieces', 'certified authenticity', 'rolex', 'patek philippe', 'audemars piguet'],
  authors: [{ name: 'Luxury28 Team' }],
  creator: 'Luxury28',
  publisher: 'Luxury28',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luxury28-prototype.vercel.app/',
    siteName: 'Luxury28',
    title: 'Luxury28 | Premium Timepieces',
    description: 'Curated luxury watches. Certified authenticity. Limited availability.',
    images: [
      {
        url: '/Homepage/hero-section.png',
        width: 1200,
        height: 630,
        alt: 'Luxury28 - Premium Timepieces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury28 | Premium Timepieces',
    description: 'Curated luxury watches. Certified authenticity. Limited availability.',
    creator: '@luxury28',
    images: ['/Homepage/hero-section.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Luxury28.png',
    apple: '/Luxury28.png',
  },
}

import { CartProvider } from '@/context/CartContext'
import { GlobalFooter } from '@/components/global-footer'
import { PrototypeOverlay } from '@/components/prototype-overlay'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-foreground selection:bg-primary/30`}>
        <CartProvider>
          <PrototypeOverlay />
          <GlobalHeader />
          {children}
          <GlobalFooter />
          <Toaster richColors position="top-right" />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </CartProvider>
      </body>
    </html>
  )
}
