"use client"
import React from 'react'
import Link from 'next/link'
import MenuItems from '../dependant/menu/_MenuItems'
import Searchbar from '../searchbar/Searchbar'
import { usePathname } from 'next/navigation'
const Header = () => {
  const pathname = usePathname()
  return (
    <div className={`${pathname === "/" && "bg-gray-200"}`}>
      <div className=' container max-w-6xl mx-auto p-3 pt-6'>
        <div className='flex justify-between items-center'>
          <Link href="/" className='text-3xl font-bold'>
            LOGO
          </Link>
          <div className='hidden lg:flex space-x-8'>
            <MenuItems />
          </div>
          <div>
            <div className='hidden lg:block  '>
              <Searchbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header