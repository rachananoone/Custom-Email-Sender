"use client"
import React, { useState } from 'react'

export default function DropdownMenu() {
    const [selectedValue,setSelectedValue] =useState("");
    const [toggle,setToggle]=useState(false);

    const handleClick=()=>{
        console.log("clicked")
        setToggle((toggle)=>!toggle);
        console.log(toggle)
    }

    return <div>
    <div className='mb-1'>Detected Columns</div>
    <button 
        className='border rounded-md flex justify-between items-center w-full py-1 px-1.5'
    >
        <div className='px-2'>{selectedValue?
            <span className=''>selectedValue</span>
            :<span className='text-gray-400'>Select Columns</span>}</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    </button>

    <button  onClick={handleClick}>Hi there</button>
    <h1>MEEEEEEEEEe</h1>

    {toggle?(
        <ul className='absolute top-full left-0 w-full mt-1 bg-white rounded-md shadow-sm'>
            <li>Company</li>
            <li>Email</li>
            <li>Location</li>
            <li>Products</li>
        </ul>
    ):null}
    </div>
}
