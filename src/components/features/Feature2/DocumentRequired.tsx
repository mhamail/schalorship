import React from 'react'
import Heading1a from '@/components/typography/heading/Heading1a'
import PointsCard from '@/components/cards/pointsCard/PointsCard'

const DocumentRequired = () => {
    return (
        <div className='w-full bg-gray-100 p-6 py-20'>
            <div className='dimention space-y-10'>
                <div className='text-center'>
                    <Heading1a text='Document Required for Abroad Study' />
                </div>
                <PointsCard />
            </div>
        </div>
    )
}

export default DocumentRequired