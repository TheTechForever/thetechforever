// ============================================================
// layout.jsx
// This is the ROOT LAYOUT — it wraps every page on the site.
// Think of it as the "shell" that holds everything together.
// The <children> is where your page content gets inserted.
// ============================================================

import './globals.css'

// Metadata: controls the browser tab title and SEO description
export const metadata = {
  title: 'TechNova — IT & Software Solutions',
  description: 'We build powerful software, websites, and digital products for modern businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* All page content renders here */}
        {children}
      </body>
    </html>
  )
}
