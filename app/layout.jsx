import './globals.css'

const siteUrl = 'https://velory.systems'
const title = 'VELORY — Premium Websites for Local Businesses'
const description =
  'VELORY designs fast, modern websites that make local businesses look established and generate more enquiries.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'VELORY preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
