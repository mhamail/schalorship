import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const data = [
    {
        image: "/universities/australia.jpg",
        title: "Study in Australia"
    },
    {
        image: "/universities/canada.png",
        title: "Study in Canada"
    },
    {
        image: "/universities/china.jpg",
        title: "Study in China "
    },
    {
        image: "/universities/france.jpg",
        title: "Study in France"
    },
    {
        image: "/universities/germany.jpg",
        title: "Study in Germany"
    },
    {
        image: "/universities/italy.jpg",
        title: "Study in Italy"
    },
    {
        image: "/universities/usa.jpg",
        title: "Study in USA"
    },
    {
        image: "/universities/uk.jpg",
        title: "Study in UK"
    },
]
const UniversityCard = () => {
    return (
        <div className='grid grid-cols-12 gap-6'>
            {data.map((item,index) => (
                <Link href="#" key={index} className='cursor-pointer hover:bg-hover_primary hover:text-white md:col-span-4 sm:col-span-6 col-span-12 flex flex-col justify-between space-y-6 shadow-lg p-4'>
                    <div className='-skew-x-6 hover:skew-x-0'>
                        <Image
                            src={item.image}
                            alt="china"
                            className='object-cover md:w-auto w-full'
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className='space-y-2 '>
                        <h2 className='text-2xl font-bold text-heading'>
                            {item.title}
                        </h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default UniversityCard