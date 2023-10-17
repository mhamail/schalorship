"use client"
import React, { FC, useState, useEffect, useRef } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"
import { ImCross } from 'react-icons/im'

interface props {
    placeholder: string,
    setValue: React.Dispatch<React.SetStateAction<any>>,
    name: string,
    required?: boolean,
    data: string[],
    formData: FormData,
}

const MultiSelect: FC<props> = ({ placeholder, data, setValue, name, required, formData }) => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const list = [
        "select 1",
        "select 2",
        "select 3",
        "select 4",
    ]
    //*--ref start
    const divRef = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    //ref end--*

    const handleClick = (select: string) => {
        !data.includes(select) &&
            setValue((prevValues: any) => {
                return {
                    ...prevValues,
                    [name.toString()]: [...data, select],
                };
            });
        formData.set(name, JSON.stringify([...data, select]))
    }
    // remove select
    const removeSelect = (select: string) => {
        const filter = data.filter((item, index) => {
            return select !== item
        })
        setValue((prevValues: any) => {
            return {
                ...prevValues,
                [name.toString()]: filter,
            };
        });
        formData.set(name, JSON.stringify(filter))
    }
    // searching to show
    const filteredList = list.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const Required = () => (
        <span className='text-primary'>*</span>
    )
    return (
        <div className='relative'>
            <div className='group'>
                <label>
                    Select <span className='capitalize'>
                        {name}
                    </span>
                    &nbsp;
                    {required && Required()}
                </label>
                <div ref={divRef} className={`p-1 w-full border border-gray-400 group-hover:border-primary group-hover:bg-dim_primary flex items-center justify-between cursor-pointer select-none text-text_primary rounded-sm`}
                    onClick={() => setOpen(!open)}
                >
                    {/* show on placeholder */}
                    {data.length > 0 ?
                        <div className='flex space-x-2'>
                            {data.map((item, index) =>
                                <p key={index}>
                                    {item}
                                    {index !== data.length - 1 && ','}
                                </p>)}
                        </div>
                        :
                        placeholder
                    }
                    <IoMdArrowDropdown />
                </div>
                {/* toggle */}
                {open &&
                    <div className='bg-white shadow-lg border' ref={divRef}>

                        <div className='flex flex-wrap'>
                            {data.map((item, index) => (
                                <div key={index} className='relative bg-gray-300 mt-2 mb-1 ms-2'>
                                    <span className='absolute -top-2 p-[2px] bg-primary text-white hover:bg-red-600 '
                                        onClick={() => removeSelect(item)}
                                    >
                                        <ImCross size={10} />
                                    </span>
                                    <p className='p-2'>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <input
                            type='text'
                            className='p-2 w-full border-b border-gray-300 focus:border-primary outline-none text-text_primary'
                            placeholder='Search...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <ul className='absolute w-full z-50 bg-white shadow-lg border rounded-sm'>
                            {filteredList.map((item, index) => (
                                <li className=' border border-gray-200 p-2 px-4 text-sm cursor-pointer hover:underline hover:bg-dim_primary'
                                    key={index}
                                    onClick={() => handleClick(item)}
                                >
                                    <h4 className='font-bold text-text_primary'>
                                        {item}
                                    </h4>
                                </li>
                            ))}

                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default MultiSelect