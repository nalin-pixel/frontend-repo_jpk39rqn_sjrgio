import React from 'react'
import SectionHeader from './SectionHeader'
import AlumniGrid from './AlumniGrid'

const AlumniSection = () => {
  return (
    <section className="relative py-20">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50" aria-hidden="true" />

      {/* decorative blur orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/60 bg-white/60 p-8 backdrop-blur-xl shadow-xl">
          <SectionHeader
            title="Alumni Sukses Kami"
            subtitle="Para alumni kami terus menginspirasi dengan karya dan dedikasi mereka. Mereka adalah wujud dari nilai-nilai integritas, keunggulan akademik, dan semangat kolaborasi yang kami tanamkan."
          />

          <AlumniGrid />
        </div>
      </div>
    </section>
  )
}

export default AlumniSection
