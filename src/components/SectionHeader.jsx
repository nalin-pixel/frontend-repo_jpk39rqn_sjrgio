import React from 'react'

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="mt-4 text-slate-600 leading-relaxed">
        {subtitle}
      </p>
    </div>
  )
}

export default SectionHeader
