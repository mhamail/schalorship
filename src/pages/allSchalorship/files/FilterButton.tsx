import React from 'react'
import { GrMenu } from 'react-icons/gr'

const FilterButton = ({ open }: { open: any }) => {

    return (
        <div className='absolute md:hidden top-1/2 transform -translate-y-1/2 z-10'>
            <div className='font-bold pe-4 md:hidden flex items-center space-x-2 '
                onClick={open}
            >
                <GrMenu />
                <h4>Filter </h4>
            </div>
          </div>
    )
}

export default FilterButton