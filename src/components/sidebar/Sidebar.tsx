import React, { FC } from 'react'
import Link from 'next/link'
import { BiRightArrowAlt } from 'react-icons/bi'
import SidebarApply from './SidebarApply'

const Sidebar: FC<any> = ({ children }) => {
    return (
        <div className='w-full'>
            <div className='flex'>
                <div className='w-full'>
                    {children}
                </div>
                <div className='w-80 me-auto'>
                    <SidebarApply />
                </div>
            </div>
        </div>
    )
}

export default Sidebar