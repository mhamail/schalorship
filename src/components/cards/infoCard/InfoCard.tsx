import React from 'react'
import Image from 'next/image'
import PrimaryButton from '@/components/buttons/primaryButton/PrimaryButton'
const images = [
    "/schalorship/download.jpeg",
    "/schalorship/download2.jpeg",
    "/schalorship/download3.jpg",
    "/schalorship/download4.jpeg",
    "/schalorship/download5.png",
    "/schalorship/download6.jpeg"
]
const paragraph = "A Fully Funded scholarship in Canada for International Students. Canada Universities Canada is offering a Fully Funded scholarships in All Subjects for degree level Undergraduate to International Students. Apply now for Canadian Francophonie Scholarship Program 2024 before the deadline closes."
const InfoCard = () => {
    return (
        <div className='grid grid-cols-12 gap-6'>
            {images.map((image) => (
                <div className='md:col-span-6 xl:col-span-4 col-span-12 flex flex-col justify-between space-y-6 shadow-lg p-4' key={Math.random()}>
                    <div>
                        <Image
                            src={image}
                            alt="china"
                            className='object-cover md:w-auto w-full'
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className='space-y-2 '>
                        <h2 className='text-2xl font-bold text-heading'>
                            Canadian Francophonie Scholarship Program 2024
                        </h2>
                        <p className='max-w-md'>
                            {paragraph.substring(0, 200) + "..."}
                        </p>
                    </div>
                    <div className='text-sm'>
                        <PrimaryButton text={"Learn More"} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InfoCard