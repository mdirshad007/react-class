import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Products() {
    const nav=useNavigate()
  return (
    <div className='max-w-[960px] mx-auto'>
        <h2 className='text-3xl font-bold'>Our products</h2>
        <ul className='flex gap-4 mt-5 text-xl mb-7'>
            <li><button onClick={()=>nav('shirt')}>Shirt</button></li>
            <li><button onClick={()=>nav('jins')}>Jins</button></li>
        </ul>
        <Outlet className=""/>
    </div>
  )
}
