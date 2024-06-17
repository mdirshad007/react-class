import React from 'react'
import { Link, NavLink, useNavigate} from 'react-router-dom'

export default function NavBar() {
  const nav=useNavigate()
  return (
    <section className='bg-gray-100 mb-20 py-5'>
    <div className='max-w-[1240px] mx-auto flex justify-between items-center'>
      <button onClick={()=>nav("/")} className='text-4xl font-bold'>Logo</button>
        <ul className='flex justify-center gap-3 px-4 py-4 nav'>
            <NavLink to={'/'}><li>Home</li></NavLink>
            <NavLink to={'/about'}><li>About</li></NavLink>
            <NavLink to={'/services'}><li>Services</li></NavLink>
            <NavLink to={'products'}>Products</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
        </ul>
        <Link to={'/about'}><button className='bg-green-600 text-white py-4 px-5'>About Us</button></Link>
    </div>
    </section>
  )
}
