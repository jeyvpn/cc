import React, { useEffect, useState } from 'react'
import { getSeries } from '../api/ccloud'
import { Link } from 'react-router-dom'

export default function Series() {
  const [series, setSeries] = useState<any[]>([])
  useEffect(() => {
    getSeries(0).then(setSeries).catch(console.error)
  }, [])
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">سریال‌های جدید</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {series.map(s => (
          <Link to={`/movie/${s.id}`} key={s.id}>
            <div className="bg-white dark:bg-gray-800 rounded overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-48 object-cover"/>
              <div className="p-2">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{s.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
