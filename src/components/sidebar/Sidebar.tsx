import React, { FC } from 'react'
import Link from 'next/link'
import { BiRightArrowAlt } from 'react-icons/bi'
import SidebarApply from './SidebarApply'

const Sidebar: FC<any> = ({ children }) => {
    return (
        <div className='flex relative'>
            <div className='md:w-3/4 w-full'>
                <div className='h-full'>
                    {children}
                </div>
            </div>
            <SidebarApply />
        </div>
    )
}

export default Sidebar