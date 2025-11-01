import React, { useState } from 'react'
import { search } from '../api/ccloud'
import { Link } from 'react-router-dom'

export default function Search() {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<any[]>([])
  const doSearch = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!q) return
    const res = await search(q)
    setResults(res)
  }
  return (
    <div>
      <form onSubmit={doSearch} className="mb-4 flex gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="جستجو..." className="flex-1 p-2 border rounded"/>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">جستجو</button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map(r => (
          <Link to={`/movie/${r.id}`} key={r.id}>
            <div className="bg-white dark:bg-gray-800 rounded overflow-hidden">
              <img src={r.image} alt={r.title} className="w-full h-40 object-cover"/>
              <div className="p-2">
                <h3 className="font-semibold">{r.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
