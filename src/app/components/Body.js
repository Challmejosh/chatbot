"use client"
import { useContext } from "react";
import Chat from "./chat";
import { AppContext } from "./Context";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";
import {FaBars} from 'react-icons/fa'

const Body  = () => {
    const {handleHam,ham} = useContext(AppContext)
    return ( 
      <div className="h-screen text-black/50 text-lg flex gap-3 relative sm:static w-full">
        <div className={`${ham ? "hidden" : "flex"} flex items-center transition-all justify-start xl:hidden fixed bg-blue-50 w-full top-0 h-[50px] p-3`}>
          <FaBars onClick={handleHam} className="cursor-pointer" size={34} />
        </div>
        <Sidebar />
        <MobileNav />
        <Chat />
      </div>
     );
}
 
export default Body;