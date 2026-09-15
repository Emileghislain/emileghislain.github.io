import { Montserrat, Syne } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '../context/theme'

// Syne carries the display voice, Montserrat everything that is read.
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className={`${syne.variable} ${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
