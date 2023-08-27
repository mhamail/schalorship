import React from 'react'
import SelectWithSearch from '@/components/select/SelectWithSearch'
import PrimaryButton from '@/components/buttons/primaryButton/PrimaryButton'

const MultiSelectFilter = () => {
    return (
        <div className='space-y-6 bg-white/60 text-text_primary p-2'>
            <h4 className='font-bold text-lg'>
                Find Desired University
            </h4>
            <div className='space-y-2'>
                <SelectWithSearch text="Choose Country" />
                <SelectWithSearch text="Choose Degree" />
                <SelectWithSearch text="Choose Subject" />
                <SelectWithSearch text="Choose Funding Type" />
            </div>
            <div>
                <PrimaryButton text="Submit" />
            </div>
        </div>
    )
}

export default MultiSelectFilter