import React from 'react'

export default function EmailContent() {
  return (
    <div className='border rounded-md py-4 px-4'>
      <div className="font-semibold text-2xl mb-1">Email Integration</div>
      <div className="text-gray-400 text-sm mb-4">Connect your email account or ESP</div>
      <button className='flex items-center gap-x-3 bg-gray-900 rounded-md p-2 text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <div>Connect Gmail Account</div>
      </button>
    </div>
  )
}
