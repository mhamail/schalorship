import React from 'react'
import Link from 'next/link'
const SidebarContents = () => {
    const stepstoapply = () => (
        <div className='text-center flex flex-col items-center space-y-3'>
            <h3 className='md:text-md font-bold mb-'>
                Steps for Applying</h3>
            <Link href={"#"}>
                <p className='md:text-md underline hover:text-hover_text transition-all duration-300'>
                    Steps for Apply Master
                </p>
            </Link>
            <Link href={"#"}>
                <p className='md:text-md underline hover:text-hover_text transition-all duration-300'>
                    Steps for Apply Bachelor
                </p>
            </Link>
            <Link href={"#"}>
                <p className='md:text-md underline hover:text-hover_text transition-all duration-300'>
                    Steps for Apply College
                </p>
            </Link>
        </div>
    )
    const schalorship=()=>(
        <div className='flex flex-col items-center space-y-3 text-center'>
            <h3 className='md:text-md font-bold mb-3'>
                Schalorships
                </h3>
            <Link href={"#"}>
                <p className='md:text-md underline hover:text-hover_text transition-all duration-300'>
                    CSC Schalorship
                </p>
            </Link> 
            <Link href={"#"}>
                <p className='md:text-md underline hover:text-hover_text transition-all duration-300'>
                    GKS Schalorship
                </p>
            </Link> 
        </div>
    )
    return (
        <div className='px-4 space-y-10 py-10'>
            {stepstoapply()}
            {schalorship()}
        </div>
    )
}

export default SidebarContents