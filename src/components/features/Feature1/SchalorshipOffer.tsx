import React from 'react'
import Heading1a from '@/components/typography/heading/Heading1a'
import InfoCard from '@/components/cards/infoCard/InfoCard'

const SchalorshipOffer = () => {
  return (
      <div className='space-y-6 dimention'>
        <div className='text-center'>
          <Heading1a text='Newest Schalorship Offer' />
        </div>
        <InfoCard />
      </div>
  )
}

export default SchalorshipOffer