import React from 'react'
import { Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <ul className='flex justify-center gap-3 px-4 py-4'>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/services'}><li>Services</li></Link>
            <Link to={'/users'}>Users</Link>
        </ul>
    </div>
  )
}
