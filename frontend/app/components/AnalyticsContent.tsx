import { useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


export default function Analytics() {
  const data = [
    { name: 'Total Sent', value: 400 },
    { name: 'Pending', value: 300 },
    { name: 'Scheduled', value: 200 },
    { name: 'Failed', value: 100 },
  ]

  const [progress,setProgress]=useState(45);

  return (
    <div className="border rounded-md py-4 px-4">
      <div className="font-semibold text-2xl mb-1">Email Analytics</div>
      <div className="text-gray-400 text-sm mb-4">Real-time statistics of your email campaign</div>
      <div className="grid grid-cols-2 gap-x-9 mt-8">

        {/* Email Status */}
        <div className="border rounded-md pr-3 py-2.5">
          <div className="text-xl font-semibold text-center mb-2">Email Status</div>
          <ResponsiveContainer width="100%" height={250} className="">
            <BarChart data={data}>
              <Bar dataKey="value" fill="#8884d8"></Bar>
              <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
              <XAxis dataKey="name"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Legend></Legend>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Overall Progess */}
        <div className="border rounded-md p-4">
          <div className="grid gap-y-3">
            <div className="text-xl font-semibold text-center mb-4">Overall Progress</div>
            
            <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-sky-600 rounded-full h-4 transition-all duration-300 ease-in-out"
                  style={{width:`${progress}%`}}
                ></div>
            </div>
            <div className="text-center font-semibold"> {progress}% Complete </div>
          </div>
        </div>
      </div>
    </div>
  )
}
