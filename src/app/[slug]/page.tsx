import React from 'react'
import SinglePage from '@/pages/singlePage/SinglePage'

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className='bg-primary/5 pt-10'>
      <SinglePage />
    </div>
  )
}

export default page