import React from 'react'
import Header from '@/components/header/Header'


const Layout = ({ children }: { children: React.ReactNode }) => {
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