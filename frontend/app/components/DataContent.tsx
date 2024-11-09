import DropdownMenu from "./DropdownMenu";

export default function DataContent(){
    return <div className="border rounded-md py-4 px-4">
        <div className="font-semibold text-2xl mb-1">Data Connection</div>
        <div className="text-gray-400 text-sm mb-4">Connect your data source for email customization</div>
        <button className="flex items-center border rounded-md w-fit p-1.5 gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
            <div>Upload CSV</div>
        </button>
        <div className="mt-7 mb-4">
            <DropdownMenu></DropdownMenu>
        </div>
    </div>
}