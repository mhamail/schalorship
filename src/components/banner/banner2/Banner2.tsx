import React from 'react'
import Heading1a from '@/components/typography/heading/Heading1a'
import ContactUs from '@/components/form/contactus/ContactUs'

const Banner2 = () => {
    return (
        <div className='p-6 py-20 relative bg-slate-200'>
            <div className='text-center relative z-10'>
                <Heading1a text='We will Apply For You' />
            </div>
            <div className='lg:ms-40 md:mx-20 mt-10'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='lg:w-1/3 w-full space-y-4'>
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
                    <div className='lg:w-1/2 w-full mt-16 lg:mt-0'>
                        <ContactUs />
                    </div>
                </div>
            </div>
            <div className='absolute lg:top-0 lg:left-1/2 lg:right-1/2 lg:-translate-x-1/2  lg:w-2 lg:h-full w-full h-2 top-[47%] left-0 right-0 -translate-y-1/2 lg:translate-y-0 bg-white -skew-x-12 -skew-y-3'>
            </div>
        </div>
    )
}

export default Banner2