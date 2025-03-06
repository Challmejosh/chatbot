"use client"

import { useContext } from "react";
import { AppContext } from "./Context";
import { FaTimes } from "react-icons/fa";

const MobileNav = () => {
    const {ham,prompt,handleHam,handleSendMessage,promptDel} = useContext(AppContext)
    return (
        <div className={`transition-all h-screen ${ham ? "xl:hidden w-[70vw] z-10 absolute left-0 h-screen flex flex-col p-3 bg-blue-600 items-start justify-between" : "sm:hidden w-[50vw] absolute h-screen left-[-100vw] flex flex-col p-3 bg-blue-50 items-start justify-between"}`}>
            <div className="w-full flex justify-between">
                <h1 className="text-3xl text-black/80 ">Chatgem</h1>
                <FaTimes className="cursor-pointer" onClick={handleHam} size={34} />
            </div>
            <div className="h-full w-full flex flex-col items-start justify-between gap-5">
                {/* MESSAGES */}
                <div className="flex flex-col h-[500px] overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar items-start justify-start p-3 w-full">
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
export default MobileNav;