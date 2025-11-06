import React from 'react'

const AlumniCard = ({ name, role, quote, img }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur shadow-lg ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-cyan-50/40 to-blue-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="p-6">
        <div className="aspect-square w-full overflow-hidden rounded-xl">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
          <p className="text-emerald-700 font-medium mt-1">{role}</p>
          <p className="mt-3 text-slate-600 italic">“{quote}”</p>
        </div>
      </div>
    </div>
  )
}

export default AlumniCard
