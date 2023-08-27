"use client"
import React, { useState, useEffect } from 'react';
import SidebarContents from './sidebarContents/SidebarContents';
const SidebarApply = () => {
    const [isSidebarFixed, setIsSidebarFixed] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const screenHeight = window.innerHeight;
        const threshold = screenHeight * 0.4; // 40% of the screen height

        setIsSidebarFixed(scrollPosition >= threshold);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`md:w-1/4 bg-primary min-h-screen hidden md:block ${isSidebarFixed && 'fixed right-0 top-0'}`}
        >
            <div className='text-white '>
                <SidebarContents />
            </div>
        </div>
    );
};

export default SidebarApply;
