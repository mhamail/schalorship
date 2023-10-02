import React, { FC } from 'react'
import SidebarApply from './SidebarApply'

const Sidebar: FC<any> = ({ children, className }) => {
    return (
        <div className='w-full md:flex'>
                <div className='relative bg-primary/10 md:bg-transparent md:p-0 p-5'>
                    <SidebarApply />
                </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}

export default Sidebar