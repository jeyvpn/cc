import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getInfo } from '../api/ccloud'

export default function Details() {
  const { id } = useParams()
  const [item, setItem] = useState<any|null>(null)
  useEffect(() => {
    if (!id) return
    getInfo(Number(id)).then(setItem).catch(console.error)
  }, [id])
  if (!item) return <p>در حال بارگذاری...</p>
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-3">{item.title}</h1>
      <img src={item.cover} alt={item.title} className="w-full rounded mb-4"/>
      <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{__html: item.description.replace(/\n/g,'<br/>')}}/>
    </div>
  )
}
