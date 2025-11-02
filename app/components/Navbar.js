import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Michroma } from 'next/font/google'

const michroma = Michroma({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-michroma',
});

const Navbar = () => {
  return (
    <nav className="navbar bg-black text-white p-1 w-full fixed z-100">
      <div className="container mx-auto flex justify-between items-center ">
        <div className={`logo text-2xl flex items-center text-white mx-8 font-bold ${michroma.className}`}>
          <span>
            <Image src="/wtf.png" alt="Lockr Logo" width={70} height={70} priority />
          </span>
          ARCAVON
        </div>
        <div className='mx-10 flex gap-3'>
          <Link href="#" className="mx-2 hover:text-cyan-400">Home</Link>
          <Link href="#" className="mx-2 hover:text-cyan-400">Services</Link>
          <Link href="#" className="mx-2 hover:text-cyan-400">About</Link>
          <Link href="#" className="mx-2 hover:text-cyan-400">Contact</Link>
          <Link href="#" className="mx-2 hover:text-cyan-400">Portfolio</Link>
          <Link href="#" className="mx-2 hover:text-cyan-400">Socials</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
