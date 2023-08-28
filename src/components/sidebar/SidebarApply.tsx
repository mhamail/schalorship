"use client"
import React, { useState, useEffect } from 'react';
import SidebarContents from './sidebarContents/SidebarContents';
const SidebarApply = () => {
    const [isSidebarFixed, setIsSidebarFixed] = useState(false);
    const [sidebarHeight, setSidebarHeight] = useState('100vh');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const screenHeight = window.innerHeight;
        const threshold = screenHeight * 0.4; // 40% of the screen height
        const pageHeight = document.body.scrollHeight;
        const footer = 210;
        setIsSidebarFixed(scrollPosition >= threshold);

        // Calculate the new sidebar height to show the footer
        if (scrollPosition + screenHeight >= pageHeight - footer) {
            setSidebarHeight(`calc(100% - ${footer}px)`);
        } else {
            setSidebarHeight('100vh');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`md:w-1/4 h-screen bg-primary hidden md:block ${isSidebarFixed && 'fixed right-0 top-0'}`}
        >
            <div className='text-white overflow-y-auto' style={{ height: sidebarHeight }}>
                <SidebarContents />
            </div>
        </div>
    );
};

export default SidebarApply;
