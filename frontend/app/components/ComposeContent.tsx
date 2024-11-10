import React from 'react'

export default function ComposeContent() {
  return (
    <div className='border rounded-md py-4 px-4'>
      <div className="font-semibold text-2xl mb-1">Compose Gmail</div>
      <div className="text-gray-400 text-sm mb-6">Customize your email content</div>
      <textarea 
        placeholder='Enter your email template here. Use {CompanyName}, {Location}, etc. as placeholders' rows={10}  
        className='w-full border rounded-md p-2'>
      </textarea>
      <div className='flex justify-end'>
        <button 
          className='bg-gray-900 rounded-md text-white py-2 px-7 mt-3 mr-14'
        >Compose</button>
      </div>
    </div>
  )
}
