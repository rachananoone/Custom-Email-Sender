"use client"
import React, { useState } from 'react'

export default function DropdownMenu() {
    const options=['Company','Email','Location','Products'];

    const [selectedValue,setSelectedValue] =useState("");
    const [toggle,setToggle]=useState(false);

    const handleDropdown=()=>{
        console.log("clicked")
        setToggle((toggle)=>!toggle);
        console.log(toggle)
    }

    const handleSelection=(option:string)=>{
        setSelectedValue((selectedValue)=>option);
        setToggle((toggle)=>!toggle)
    }

    return <div className='relative'>
        <div className='mb-1'>Detected Columns</div>
        <button 
            className='border rounded-md flex justify-between items-center w-full py-1.5 px-1.5'
            onClick={handleDropdown}
        >
            <div className='px-2'>{selectedValue?
                <span className=''>{selectedValue} </span>
                :<span className='text-gray-400'>Select Columns</span>}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </button>

        {toggle ? (
            <ul className='absolute z-50 overflow-auto w-full mt-1 left-0 right-0 bg-white border rounded-md shadow-lg'>
                {options.map((option)=>{
                    return <li className='hover:bg-gray-100 p-1.5 m-1' onClick={()=>handleSelection(option)}>
                        {option}
                    </li>
                })}
            </ul>
        ) : null}
    </div>
}
