import React from 'react'
import AlumniSection from './components/AlumniSection'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500" />
          <span className="font-semibold text-slate-800">Sekolah Harapan</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#alumni" className="hover:text-slate-900 transition-colors">Alumni</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Kontak</a>
        </nav>
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer id="contact" className="py-10 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Sekolah Harapan. Semua hak dilindungi.
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main id="alumni">
        <AlumniSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
