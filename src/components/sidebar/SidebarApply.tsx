"use client"
import React, { useState, useEffect, useRef } from 'react';
import FilterButton from '@/pages/allSchalorship/files/FilterButton';
import SidebarContents from './sidebarContents/SidebarContents';
//context
import { useSidebarFooter } from '@/utils/useContext/sidebarFooterContext/SidebarFooterContext';

const SidebarApply = () => {
    const [isSidebarFixed, setIsSidebarFixed] = useState(false);
    const [sidebarHeight, setSidebarHeight] = useState('100vh');
    const [toggle, setToggle] = useState(false);
    //context
    const {footerHeight} =useSidebarFooter()

    //mobile *openFilter
    const openFilter = () => {
        setToggle(!toggle);
    };
    //mobile *ref
    const divRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const screenHeight = window.innerHeight;
        const threshold = screenHeight * 0.1; // 40% of the screen height

        setIsSidebarFixed(scrollPosition >= threshold);

        const pageHeight = document.body.scrollHeight;
        //i am using usecontext for the value of footerHeight but we don't need this complex method for a single value 
        let footer:number = Number(footerHeight) | 250;

        // Calculate the new sidebar height to show the footer
        if (scrollPosition + screenHeight >= pageHeight - footer) {
            setSidebarHeight(`calc(100vh - ${footer}px)`);
        } else {
            setSidebarHeight('100%');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // mobile *handleClickOutside
    const handleClickOutside = (event: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {//Close only if clicking outside the "refrence" div
            setToggle(false);
        }
    };

  // mobile *useEffect
    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={divRef}>
            <FilterButton open={openFilter} />
            <div className={`mt-5 md:mt-0 md:w-64 me-2 ${toggle ? 'block absolute h-full' : 'hidden md:block'}`}>
                <div className='bg-white fixed overflow-auto' style={{ maxHeight: sidebarHeight, top: isSidebarFixed ? '0' : '', }}>
                    <div className='text-gray-600'>
                        <SidebarContents />
                        <SidebarContents />
                        <SidebarContents />
                        <SidebarContents />
                        <SidebarContents />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarApply;
