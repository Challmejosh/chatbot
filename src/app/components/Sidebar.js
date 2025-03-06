"use client"

import { useContext,useEffect } from "react";
import { AppContext } from "./Context";

const Sidebar = () => {
    const {prompt,handleSendMessage,setPrompt,promptDel} = useContext(AppContext)

   
    return (
        <div className="hidden w-[40vw] xl:flex flex-col p-3 bg-blue-50 items-start justify-between gap-5">
            <h1 className="text-3xl text-black/80 ">Chatgem</h1>
            <div className="h-full w-full flex flex-col items-start justify-between gap-5">
                {/* MESSAGES */}
                <div className="flex flex-col h-[90%] overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar items-start justify-start p-3 w-full">
                    {prompt.map((item,index)=>(
                        <div key={index} className='my-3 flex items-center justify-between hover:bg-slate-200 w-full rounded-md cursor-pointer p-3'>
                            <p onClick={()=>handleSendMessage(item)} className="flex w-full" >{item}</p>
                            <button onClick={()=>promptDel(item)} className=' cursor-pointer text-red p-1 rounded-md'>X</button>
                        </div>
                    ))}
                </div>
                {/* USERS */}
                <div className="">
                    Profile
                    Setting
                </div>

            </div>
        </div>
    );
};
export default Sidebar;