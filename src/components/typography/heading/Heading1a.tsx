import React from 'react'

const Heading1a = ({ text }: { text: string }) => {
    return (
        <h1 className='font-bold md:text-4xl text-3xl uppercase'>
            {text}
        </h1>
    )
}

export default Heading1a