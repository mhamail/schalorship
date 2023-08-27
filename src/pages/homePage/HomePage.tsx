import React from 'react'
import Banner1 from '@/components/banner/banner1/Banner1'
import Sidebar from '@/components/sidebar/Sidebar'
import SchalorshipOffer from '@/components/features/Feature1/SchalorshipOffer'
import DocumentRequired from '@/components/features/Feature2/DocumentRequired'
const HomePage = () => {
  return (
    <div>
      <Banner1 />
      <Sidebar>
        <div className='mt-10'>
          <div className='lg:ms-40 md:mx-20'>
            <SchalorshipOffer />
          </div>
          <DocumentRequired />
        </div>
      </Sidebar>
    </div>
  )
}

export default HomePage