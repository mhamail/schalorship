import React from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import BreadCrumb1 from '@/components/breadCrumb1/BreadCrumb1'
import AddProduct from '@/components/form/addproduct/AddProduct'

const AddSchalorship = () => {
  return (
    <div className='mt-10 relative min-h-screen'>
      <div className='absolute top-0 mt-3 md:mt-0 right-0 pr-4'>
        <BreadCrumb1 crumb='Add Schalorship'
          link='/admin/addschalorship'
        />
      </div>
      <Sidebar>
        <div className='p-3'>
          <div className='flex justify-between flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
            {/* adding product form */}
            <div className='w-3/4 space-y-4'>
              <AddProduct />
            </div>
            {/* other cards */}
            <div className='w-1/4 space-y-8'>
              <div className='h-52 w-full shadow-xl'></div>
              <div className='h-52 w-full shadow-xl'></div>
              <div className='h-52 w-full shadow-xl'></div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}

export default AddSchalorship