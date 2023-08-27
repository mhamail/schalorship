"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { IoMdArrowDropdown } from "react-icons/io"
const SelectWithSearch = ({text}:{text:string}) => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const list = [
        "select 1",
        "select 2",
        "select 3",
        "select 4",
    ]
    const divRef = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {//Close only if clicking outside the "refrence" div
            setOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const filteredList = list.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filter = (item: string) => {
        // console.log(item)
    }
    return (
        <div ref={divRef}>
            <div className={`bg-white p-1 w-full border border-gray-400 hover:border-black hover:bg-gray-100 flex items-center justify-between cursor-pointer select-none text-text_primary`}
                onClick={() => setOpen(!open)}

            >
                {text}
                <IoMdArrowDropdown />
            </div>
            {open &&
                <div className='bg-white shadow-lg border'>
                    <input
                        type='text'
                        className='p-2 w-full border-b border-gray-300 focus:border-primary outline-none text-text_primary'
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ul className='bg-white shadow-lg border px-1'>
                        {filteredList.map((item, index) => (
                            <li className='p-2 text-sm cursor-pointer hover:underline' key={index}
                                onClick={() => filter(item)}>
                                <h4 className='font-bold text-text_primary'>
                                    {item}
                                </h4>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}

export default SelectWithSearch