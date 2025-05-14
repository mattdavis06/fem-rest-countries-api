import Header from '@/components/shared/Header'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'REST Countries API Solution',
  description:
    'A Frontend Mentor challenge to build an REST API application using the countries API, to match a supplied design and visual. ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        disableTransitionOnChange
      >
        <body className='bg-bg-light dark:bg-bg-dark antialiased'>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
