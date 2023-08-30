import React from 'react'
import Link from 'next/link'
import PrimaryButton from '@/components/buttons/primaryButton/PrimaryButton'

const data = [
    {
        title: "Doc Required for Master Degree",
        list: [
            "Attest Copy of Degree",
            "Attest Copy of Transcript",
            "Attest Doc 3",
        ],
        link: "#"
    },
    {
        title: "Doc Required for Bachelor Degree",
        list: [
            "Attest Doc 1",
            "Attest Doc 2",
        ],
        link: "#"
    },
    {
        title: "Doc Required for College",
        list: [
            "Attest Doc 1",
            "Attest Doc 2",
        ],
        link: "#"
    },
]

const PointsCard = () => {
    return (
        <div className='grid grid-cols-12 sm:gap-6 gap-y-6'>
            {data.map((item, index) => (
                <div className=' md:col-span-4 sm:col-span-6 col-span-12 shadow-lg shadow-primary/70 ring-1 ring-primary/40 p-4 space-y-4'
                    key={index}>
                    <div className='flex flex-col justify-around min-h-[300px] '>
                        <h2 className='font-bold md:text-xl text-lg'>
                            {item.title}
                        </h2>
                        <div className='ms-6'>
                            <ul className='list-disc'>
                                {item.list.map((list, index) => (
                                    <li key={index}>{list}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='text-sm'>
                            <Link href={item.link}>
                                <PrimaryButton text={"Learn More"} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PointsCard