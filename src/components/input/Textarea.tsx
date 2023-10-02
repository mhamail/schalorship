import React,{FC} from 'react'

interface props{
  label:string,
  placeholder:string
}
const Textarea:FC<props> = ({label,placeholder}) => {
  return (
    <div>
      <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <textarea
        id="OrderNotes"
        className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm p-3"
        rows={4}
        placeholder={placeholder}
      >
      </textarea>
    </div>
  )
}

export default Textarea