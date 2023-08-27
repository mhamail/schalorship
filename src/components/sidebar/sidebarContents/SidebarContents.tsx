import React from 'react'
import Link from 'next/link'
import MultiSelectFilter from '@/components/form/multiSelectFilter/MultiSelectFilter'

const SidebarContents = () => {
    const stepstoapply = () => (
        <div className='flex flex-col items-center space-y-3'>
            <h3 className='md:text-2xl font-bold mb-3'>
                Steps for Applying</h3>
            <Link href={"#"}>
                <p className='md:text-xl underline'>
                    Steps for Apply Master
                </p>
            </Link>
            <Link href={"#"}>
                <p className='md:text-xl underline'>
                    Steps for Apply Bachelor
                </p>
            </Link>
            <Link href={"#"}>
                <p className='md:text-xl underline'>
                    Steps for Apply College
                </p>
            </Link>
        </div>
    )
    const schalorship=()=>(
        <div className='flex flex-col items-center space-y-3'>
            <h3 className='md:text-xl font-bold mb-3'>
                Schalorships
                </h3>
            <Link href={"#"}>
                <p className='md:text-xl underline'>
                    CSC Schalorship
                </p>
            </Link> 
            <Link href={"#"}>
                <p className='md:text-xl underline'>
                    GKS Schalorship
                </p>
            </Link> 
        </div>
    )
    return (
        <div className='px-4 pt-10 space-y-10'>
            {/* <MultiSelectFilter /> */}
            {stepstoapply()}
            {schalorship()}
        </div>
    )
}

export default SidebarContents