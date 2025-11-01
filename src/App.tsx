import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Search from './pages/Search'
import Details from './pages/Details'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <header className="sticky top-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur z-10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl">CCloud Web</Link>
          <nav className="flex items-center gap-4">
            <Link to="/movies" className="hover:underline">فیلم‌ها</Link>
            <Link to="/series" className="hover:underline">سریال‌ها</Link>
            <Link to="/search" className="hover:underline">جستجو</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500">
        ساخته شده با ❤️ — نسخه وب از CCloud
      </footer>
    </div>
  )
}
