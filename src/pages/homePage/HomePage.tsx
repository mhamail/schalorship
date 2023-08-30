import React from 'react'
import Banner1 from '@/components/banner/banner1/Banner1'
import Sidebar from '@/components/sidebar/Sidebar'
import SchalorshipOffer from '@/components/features/Feature1/SchalorshipOffer'
import DocumentRequired from '@/components/features/Feature2/DocumentRequired'
import Banner2 from '@/components/banner/banner2/Banner2'
import Universities from '@/components/features/Feature3/Countries'
const HomePage = () => {
  return (
    <div>
      <Banner1 />
        <div className='mt-10 space-y-16'>
          <div>
            <SchalorshipOffer />
            <DocumentRequired />
            <Banner2 />
          </div>
          <div className='dimention'>
            <Universities />
          </div>
        </div>
    </div>
  )
}

export default HomePage