import React from 'react'

const PrimaryButton = ({ text,className }: { text: String,className?:string }) => {
  return (
    <button className={`${className} uppercase p-2 px-4 text-white bg-primary font-semibold rounded-lg  hover:bg-hover_primary duration-300 transition-all `}>
      {text}
    </button>
  )
}

export default PrimaryButton