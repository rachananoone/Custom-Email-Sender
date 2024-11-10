import { Calendar, Sliders } from 'lucide-react';
import React, { useState } from 'react'

export default function ScheduleContent() {
  const [scheduleTime,setScheduleTime]=useState("");

  const handleTimeChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    // console.log(typeof(event.target.value)); //it is a string
    setScheduleTime(event.target.value);
  }

  return (
    <div className='border rounded-md py-4 px-4'>
      <div className="font-semibold text-2xl mb-1">Email Scheduling and Throttling</div>
      <div className="text-gray-400 text-sm mb-10">Set up your email sending schedule</div>
      <div className='flex items-center gap-x-3'>
        {/* add calender here */}
        <Calendar className='size-4'></Calendar>
        <input 
          type='datetime-local'
          onChange={handleTimeChange}
          className='w-full p-2 border rounded-md'
        ></input>
      </div>
      <div className='flex items-center gap-x-3 mt-4'>
        <Sliders className='size-4'></Sliders>
        <input type='number' className='w-full p-2 border rounded-md' placeholder='Emails per hour'></input>
      </div>
      <button 
        className='bg-gray-900 rounded-md text-white p-2 mt-7 mb-4'
      >Set Schedule</button>
    </div>
  )
}
