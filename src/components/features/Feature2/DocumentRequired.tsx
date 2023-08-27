import React from 'react'
import Heading1a from '@/components/typography/heading/Heading1a'
import PointsCard from '@/components/cards/pointsCard/PointsCard'

const DocumentRequired = () => {
    return (
        <div className='space-y-10 bg-gray-100 p-6 py-20 md:px-20 lg:ps-40'>
            <div className='text-center'>
                <Heading1a text='Document Required for Abroad Study' />
            </div>
            <PointsCard />
        </div>
    )
}

export default DocumentRequired