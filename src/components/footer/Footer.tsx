import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsLinkedin, BsGoogle } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='bg-slate-900 p-3 pt-16 pb-8 md:max-h-[250px] relative'>
            <div className='dimention text-white flex flex-col md:flex-row md:justify-between items-center space-y-8 md:space-y-0'>
                <h1 className='font-bold text-4xl'>
                    LOGO
                </h1>
                <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-14'>
                    {/* col 1 */}
                    <div className='flex flex-col text-center md:text-start space-y-2'>
                        <h3 className='text-sm font-bold capitalize'>Features</h3>
                        <div className='text-gray-500 flex flex-col space-y-1'>
                            <Link href="#" className="capitalize hover:text-hover_text hover:scale-105"
                            >
                                Newest Schalorship
                            </Link>
                            <Link href="#" className="capitalize hover:text-hover_text  hover:scale-105"
                            >
                                Document Required
                            </Link>
                            <Link href="#" className="capitalize hover:text-hover_text  hover:scale-105"
                            >
                                Consult with us
                            </Link>
                            <Link href="#" className="capitalize hover:text-hover_text  hover:scale-105"
                            >
                                Universities
                            </Link>
                        </div>
                    </div>
                    {/* col 2 */}
                    <div className='flex flex-col text-center md:text-start space-y-2 '>
                        <h3 className='text-sm font-bold capitalize'>Pages</h3>
                        <div className='text-gray-500 flex flex-col space-y-1'>
                            <Link href="#" className="capitalize hover:text-hover_text  hover:scale-105"
                            >
                                Blogs
                            </Link>
                            <Link href="#" className="capitalize hover:text-hover_text  hover:scale-105"
                            >
                                All Schalorship
                            </Link>
                            <Link href="#" className="capitalize hover:text-hover_text  hover:scale-105"
                            >
                                About
                            </Link>
                            <Link href="#" className="capitalize hover:text-hover_text  hover:scale-105"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                  
                </div>
                <div className='flex space-x-6'>
                    <Link href="#" className='hover:scale-125'>
                        <BsFacebook size={30} />
                    </Link>
                    <Link href="#"
                        className='hover:scale-125' >
                        <BsLinkedin size={30} />
                    </Link>
                    <Link href="#"
                        className='hover:scale-125'>
                        <BsGoogle size={30} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer