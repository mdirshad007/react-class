import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate= useNavigate()
  return (
    <div className='font-bold text-2xl'>Home<br/>
    <button onClick={()=>navigate('about')} className='bg-slate-300 px-4 py-3'>Go to About</button>
    </div>
  )
}
