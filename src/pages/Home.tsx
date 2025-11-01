import React, { useEffect, useState } from 'react'
import { getMovies } from '../api/ccloud'
import { Link } from 'react-router-dom'

export default function Home() {
  const [movies, setMovies] = useState<any[]>([])
  useEffect(() => {
    getMovies(0).then(setMovies).catch(console.error)
  }, [])
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">جدیدترین‌ها</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {movies.map(m => (
          <Link to={`/movie/${m.id}`} key={m.id} className="block">
            <div className="bg-white dark:bg-gray-800 rounded shadow-sm overflow-hidden">
              <img src={m.image} alt={m.title} className="w-full h-56 object-cover"/>
              <div className="p-2">
                <h3 className="font-semibold text-sm">{m.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{m.year} • IMDB {m.imdb}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
