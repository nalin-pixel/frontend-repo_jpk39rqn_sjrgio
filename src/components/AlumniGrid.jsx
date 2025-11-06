import React from 'react'
import AlumniCard from './AlumniCard'

const alumni = [
  {
    name: 'Alya Pratama',
    role: 'CEO of Startup X',
    quote:
      'Sekolah ini menumbuhkan rasa ingin tahu dan kepemimpinan yang menjadi fondasi karier saya.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Rizky Hartono, M.D.',
    role: 'Dokter di RS Nusantara',
    quote:
      'Dukungan guru dan kultur akademik yang hangat membuat saya berani bermimpi besar.',
    img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Nadia Putri',
    role: 'Peneliti AI',
    quote:
      'Fasilitas dan komunitas riset di sekolah menjadi batu loncatan ke dunia teknologi.',
    img: 'https://images.unsplash.com/photo-1531123414780-f742eb4f7d05?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Dimas Wicaksono',
    role: 'Atlet Nasional',
    quote:
      'Disiplin dan sportivitas yang saya pelajari di sini membentuk mental juara.',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
  },
]

const AlumniGrid = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {alumni.map((a) => (
        <AlumniCard key={a.name} {...a} />
      ))}
    </div>
  )
}

export default AlumniGrid
