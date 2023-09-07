import React from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import InfoCard from '@/components/cards/infoCard/InfoCard'
import BreadCrumb1 from '@/components/breadCrumb1/BreadCrumb1'

const AllSchalorship = () => {
    return (
        <div className='relative dimention6xl'>
                <div className='absolute top-0 mt-6 md:mt-0 right-0 pr-4'>
                    <BreadCrumb1 crumb='All Schalorship'
                        link='/allschalorship'
                    />
                </div>
            <Sidebar>
                <InfoCard />
            </Sidebar>
        </div>
    )
}

export default AllSchalorship