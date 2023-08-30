import React from 'react'
import Heading1a from '@/components/typography/heading/Heading1a'
import ContactUs from '@/components/form/contactus/ContactUs'

const Banner2 = () => {
    return (
        <div className='py-20 relative bg-slate-200'>
            <div className='max-w-5xl mx-auto relative z-10'>
                <div className='text-center'>
                <Heading1a text='We will Apply For You' />
                </div>
            </div>
            <div className='dimention mt-10'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='md:w-1/3 container mx-auto space-y-4'>
                        <h2 className='font-bold text-xl'>
                            What we do for You
                        </h2>
                        <p className='text-justify'>
                            Every Step that required for apply we add in our site. But if you are busy and have no time to apply then you can hire us
                        </p>
                        <ul className='list-disc ms-6 font-bold'>
                            <li>
                                Email for You
                            </li>
                            <li>
                                Writing Application
                            </li>
                            <li>
                                Apply for You
                            </li>
                        </ul>
                    </div>
                    <div className='md:max-w-sm container mx-auto mt-16 lg:mt-0'>
                        <ContactUs />
                    </div>
                </div>
            </div>
            <div className='absolute md:top-0 md:left-1/2 md:right-1/2 md:-translate-x-1/2  md:w-2 md:h-full w-full h-2 top-[47%] left-0 right-0 -translate-y-1/2 md:translate-y-0 bg-white -skew-x-12 -skew-y-3'>
            </div>
        </div>
    )
}

export default Banner2