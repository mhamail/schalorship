import React from 'react'
import Sidebar from '@/components/sidebar/Sidebar';
import { format } from 'date-fns';
import BreadCrumb1 from '@/components/breadCrumb1/BreadCrumb1'
import Heading1a from '@/components/typography/heading/Heading1a'
import Image from 'next/image'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { FaUniversity, FaBookOpen } from 'react-icons/fa'
import { PiStudentFill } from "react-icons/pi"
import { TbWorld } from 'react-icons/tb'
import { IoLocationSharp } from 'react-icons/io5'
import { AiOutlineClockCircle } from 'react-icons/ai'

const SinglePage = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMMM d, yyyy');
    return (
        <div className='dimention6xl'>
            <BreadCrumb1
                crumb='Schalorships'
                link='/'
                crumb3='Germany Schalorship'
                link3='/'
                crumb4='Scholarship For Online Programs At IU International University Of Applied Sciences, Germany'
                link4='/'
            />
            <div className='mt-6'>
                <Sidebar>
                    <div className='pt-6'>
                        <h1 className='font-bold md:text-3xl text-2xl capitalize'>
                        Scholarship For Online Programs At IU International University Of Applied Sciences, Germany
                        </h1>
                        <div className='mt-6'>
                            <Image
                                src="/schalorship/download.jpeg"
                                alt='image'
                                height={500}
                                width={500}
                                className='w-full'
                            />
                            {/* highlight */}
                            <div className='pb-4 w-full ps-6 bg-white pt-6 space-y-6'>
                                {/* funding */}
                                <div className='flex items-center space-x-2 '>
                                    <MdOutlineAttachMoney size={25} />
                                    <p>Partial Funding 75% of the tuition fees</p>
                                </div>
                                <div className='flex items-center space-x-2 '>
                                    <FaUniversity size={25} />
                                    <p>Hungary Universities</p>
                                </div>
                                <div className='flex items-center space-x-2 '>
                                    <PiStudentFill size={25} />
                                    <p>Masters</p>
                                </div>
                                <div className='flex items-center space-x-2 '>
                                    <FaBookOpen size={25} />
                                    <p>All Subjects</p>
                                </div>
                                <div className='flex items-center space-x-2 '>
                                    <TbWorld size={25} />
                                    <p>International Students</p>
                                </div>
                                <div className='flex items-center space-x-2 '>
                                    <IoLocationSharp size={25} />
                                    <p>Germany</p>
                                </div>
                                <div className='flex items-center space-x-2 p-2 bg-primary text-white'>
                                    <AiOutlineClockCircle size={25} />
                                    <p>open till &nbsp;
                                        {formattedDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ps-6 mt-4'>
                        <h2 className='font-bold text-lg'>
                            Description
                        </h2>
                        <p>
                            Finland, known for its world-class education system, offers a plethora of opportunities for international students. With its high academic standards, innovative research environment, and the chance to experience the unique Nordic culture, Finland is an ideal destination for pursuing doctoral studies.


                            Studying in Finland


                            Studying in Finland offers a unique blend of high-quality education and a comfortable lifestyle. Finnish universities are renowned for their research and innovation, and the country consistently ranks high in global education rankings. Finland offers a safe and stable environment, with a high standard of living and excellent public services. Moreover, the country is known for its breathtaking natural beauty, with stunning landscapes ranging from vast forests and lakes to a beautiful archipelago.


                            The University of Lapland


                            Located in the city of Rovaniemi, right on the Arctic Circle, the University of Lapland is the northernmost university in Finland and the European Union. It is an international, multidisciplinary institution known for its research and study programs related to the Arctic and the North. The university offers a wide range of Bachelor`s, Master`s, and Doctoral programs in fields such as Law, Social Sciences, Education, Art and Design, and more.
                        </p>
                    </div>
                </Sidebar>
            </div>
        </div>
    )
}

export default SinglePage