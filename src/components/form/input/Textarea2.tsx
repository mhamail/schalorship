import React, { FC } from 'react'

interface props {
    label: string,
    placeholder: string,
    handleEvent?: () => {},
    name: string,
    value?: string | number
}
const Textarea2: FC<props> = ({ name, value, label, placeholder, handleEvent }) => {
    return (
        <div>
            <label>
                {label}
            </label>

            <textarea
                rows={4}
                placeholder={placeholder}
                name={name}
                value={value}
                className="w-full rounded-md border border-gray-400 pe-10 shadow-sm sm:text-sm p-3 relative"
                onChange={handleEvent}
            >
            </textarea>
        </div>
    )
}

export default Textarea2