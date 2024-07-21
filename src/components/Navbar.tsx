'use client'

import Link from 'next/link'
import { Warehouse  } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='bg-blue-900 py-2 border-b border-s-blue-200 fixed w-full z-10 top-0' >
      <div className='container flex items-center justify-between' >
     <Link href='/'><Warehouse className='text-white  transition-transform transform hover:scale-110'/></Link>
     <Link  className="bg-blue-800 hover:bg-blue-700 text-white 
    font-semibold py-2 px-3 rounded-lg shadow-lg transition-transform 
    transform hover:scale-105" href='/credits'>Credits</Link>
      </div>
    </div>
  )
}

export default Navbar; 