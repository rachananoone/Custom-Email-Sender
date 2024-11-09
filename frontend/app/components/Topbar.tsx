"use client"
import { useState, useEffect, Suspense, lazy } from "react";
import DataContent from "./DataContent";

export default function TopBar(){
    const tabs = ['Data', 'Email', 'Compose', 'Schedule', 'Analytics'];
    const tabConfig = [
        { name: 'Data', component: 'DataContent' },
        { name: 'Email', component: 'EmailContent' },
        { name: 'Compose', component: 'ComposeContent' },
        { name: 'Schedule', component: 'ScheduleContent' },
        { name: 'Analytics', component: 'AnalyticsContent' },
    ]

    const [activeTab,setActiveTab]=useState("Data");
    const [ContentComponent, setContentComponent] = useState<React.ComponentType|null>(null);

    useEffect(()=>{
        const renderContent=async ()=>{
            const compo=tabConfig.find((tab)=>{return tab.name==activeTab})?.component;
            try{
                const module=await import(`./${compo}`);
                setContentComponent((ContentComponent:React.ComponentType|null)=>module.default);
            }catch(error:any){
                console.log(`Error while importing content for the active tab : ${error.message}`)
                setContentComponent(null);
            }
        }
        renderContent();
    },[activeTab])

    return <div>
        <div className="bg-gray-100 flex justify-around py-1 px-2 rounded-lg">
            {tabs.map((tab)=>{
                return <button
                    key={tab}
                    onClick={()=>{
                        setActiveTab(tab)
                    }}
                    className={`rounded-md w-full py-1  ${
                        activeTab===tab
                        ?`bg-white`
                        :`text-gray-600`
                    }`}
                >
                    {tab}
                </button>
            })}
        </div>
         
         {/* Render Content */}
         <div className="mt-6">
            {ContentComponent?(
                <Suspense fallback={"Loading..."}>
                    <ContentComponent></ContentComponent>
                </Suspense>
            )
            :null
            }
         </div>
    </div>
}