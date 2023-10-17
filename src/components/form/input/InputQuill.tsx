"use client"
import React, { FC } from 'react'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading...</p>,
})
import 'react-quill/dist/quill.snow.css';

interface props {
  value?: string,
  setValue: React.Dispatch<React.SetStateAction<any>>,
  formData: FormData
}
const InputQuill: FC<props> = ({ value, setValue, formData }) => {
  const handle = (e: any) => {
    setValue((prevValue: any) => { return { ...prevValue, description: e } })
    formData.set("description", e)
  }
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handle}
      placeholder='Enter Schalorship Description...'
    />
  )
}

export default InputQuill