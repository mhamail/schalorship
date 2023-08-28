import React from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout