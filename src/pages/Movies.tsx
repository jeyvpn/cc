import React, { useEffect, useState } from 'react'
import { getTopMovies } from '../api/ccloud'
import { Link } from 'react-router-dom'

export default function Movies() {
  const [movies, setMovies] = useState<any[]>([])
  useEffect(() => {
    getTopMovies(0).then(setMovies).catch(console.error)
  }, [])
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">فیلم‌های برتر</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(m => (
          <Link to={`/movie/${m.id}`} key={m.id}>
            <div className="bg-white dark:bg-gray-800 rounded overflow-hidden">
              <img src={m.image} alt={m.title} className="w-full h-48 object-cover"/>
              <div className="p-2">
                <h3 className="font-semibold">{m.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{m.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
