import Header from '@/components/layout/Header'
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
      <body className='bg-bg-light dark:bg-bg-dark antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='px-4 py-8'>
            <div className='mx-auto max-w-7xl'>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
