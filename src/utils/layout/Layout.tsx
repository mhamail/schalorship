import React from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import SidebarFooterProvider from '../useContext/sidebarFooterContext/SidebarFooterContext'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarFooterProvider>
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </SidebarFooterProvider>
    )
}

export default Layout