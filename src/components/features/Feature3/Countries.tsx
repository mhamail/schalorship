import React from 'react'
import Heading1a from '@/components/typography/heading/Heading1a'
import UniversityCard from '@/components/cards/universityCard/UniversityCard'
const Universities = () => {
    return (
        <div className='space-y-6'>
            <div className='text-center'>
                <Heading1a text='Universities' />
            </div>
            <UniversityCard />
        </div>
    )
}

export default Universities