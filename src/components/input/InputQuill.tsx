import React, { FC } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface props {
  value?: string,
  setValue?: () => {}
}
const InputQuill: FC<props> = ({ value, setValue }) => {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder='Enter Schalorship Description...'
    />
  )
}

export default InputQuill