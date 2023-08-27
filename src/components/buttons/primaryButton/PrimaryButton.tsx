import React from 'react'

const PrimaryButton = ({ text }: { text: String }) => {
  return (
    <button className='uppercase p-2 px-4 text-white bg-primary font-semibold  hover:bg-hover_primary duration-300 transition-all '>
      {text}
    </button>
  )
}

export default PrimaryButton