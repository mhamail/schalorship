"use client"
// FooterContextforHeight
import { createContext, useContext, useState } from 'react';

interface SidebarFooterContextType {
    footerHeight: Number;
    updateFooterHeight: (newHeight: number) => void;
}

const SidebarFooterContext = createContext<SidebarFooterContextType | undefined>({
    footerHeight: 100,
    updateFooterHeight: () => { }
});

//data save in useContext()
export const useSidebarFooter = (): SidebarFooterContextType => {
    const context = useContext(SidebarFooterContext)
    if (!context) {
        throw new Error('useSidebarFooter must be used within a SidebarFooterProvider');
    }
    return context;
};

const SidebarFooterProvider = ({ children }: { children: React.ReactNode }) => {
    const [footerHeight, setFooterHeight] = useState<number>(200);
    const updateFooterHeight = (newHeight: number) => {
        setFooterHeight(newHeight)
    }
    return (
        <SidebarFooterContext.Provider value={{ footerHeight, updateFooterHeight }}>
            {children}
        </SidebarFooterContext.Provider>
    );
}
export default SidebarFooterProvider


