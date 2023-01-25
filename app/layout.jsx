import './globals.css'
import Navbar from './Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
        <Navbar/>
        {children}
        </main>
      </body>
    </html>
  )
}
