import React, { FC } from 'react'

interface InputProps {
    title: string,
    required?: boolean,
    type?: string,
    handleEvent?: () => {},
    name: string,
    placeholder: string,
    value?: string | number
}

const Input: FC<InputProps> = ({ title, required, type, name, placeholder, value, handleEvent }) => {
    const Required = () => (
        <span className='text-primary'>*</span>
    )
    return (
        <div>
            <label>
                {title} &nbsp;
                {required && Required()}
            </label>
            <input
                type={type || "text"}
                placeholder={placeholder}
                name={name}
                value={value}
                className="w-full rounded-md border border-gray-400 pe-10 shadow-sm sm:text-sm p-3 relative"
                onChange={handleEvent}
            />
        </div>
    )
}

export default Input