import React, { useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";

export default function DataContent(){
    const [chosenFile,setChosenFile]=useState<File | null>(null);
    const fileInputRef=useRef(null);

    const uploadFile=()=>{
        //@ts-ignore
        fileInputRef.current.click();
    }
    const handleFileChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files ? event.target.files[0] : null;
        setChosenFile(file);
    }

    return <div className="border rounded-md py-4 px-4">
        <div className="font-semibold text-2xl mb-1">Data Connection</div>
        <div className="text-gray-400 text-sm mb-4">Connect your data source for email customization</div>
        <div className="flex items-center gap-x-4">
            <input 
                ref={fileInputRef} 
                type="file" 
                className="hidden"
                onChange={handleFileChange}
                accept=".csv"
            ></input>
            <button 
            className="flex items-center border rounded-md w-fit p-1.5 gap-x-2"
            onClick={uploadFile}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                <div>Upload CSV</div>
            </button>
            {chosenFile?(
                <div className="flex gap-x-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>

                    <div className="text-gray-600 text-base">{chosenFile.name} </div>
                </div>
            ):null}
        </div>
        <div className="mt-7 mb-4">
            <DropdownMenu></DropdownMenu>
        </div>
    </div>
}