import React from 'react'
import Input from '@/components/input/InputEmail'
import Textarea from '@/components/input/Textarea'
import PrimaryButton from '@/components/buttons/primaryButton/PrimaryButton'
const ContactUs = () => {
    return (
        <div className='space-y-2'>
            <h2 className='font-bold text-xl'>
                Consult Us
            </h2>
            <Input />
            <Textarea />
            <div className='w-full'>
                <PrimaryButton text={"Submit"} className='w-full' />
            </div>
        </div>
    )
}

export default ContactUs