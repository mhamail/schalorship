import React from 'react'

const Textarea = () => {
  return (
    <div>
      <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700">
        Enter your consultation purpose
      </label>

      <textarea
        id="OrderNotes"
        className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm p-3"
        rows={4}
        placeholder="Enter your detail, purpose..."
      >
      </textarea>
    </div>
  )
}

export default Textarea