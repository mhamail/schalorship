import React from 'react'
import Header from '@/components/header/Header'


const Layout = ({ children, params }: { children: React.ReactNode, params: any }) => {
    console.log(params)
    return (
        <div>
            <div>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout