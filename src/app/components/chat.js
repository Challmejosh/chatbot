"use client"
import { useContext,  useState } from 'react';
import Sidebar from './Sidebar';
import { AppContext } from './Context';
import run from './AiConfig';

const Chat = () => {
  const {handleSendMessage,message,pending,allResponse,codeBlock} = useContext(AppContext)
  const [input, setInput] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleSendMessage(input)
      setInput('');
  }
  
  };
  
  return (
    <div className="flex w-full text-black mt-10 ">
      {/* <Sidebar sendLogs={sendLogs} /> */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex-grow flex w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar p-4">
          {/* Chat messages will go here */}
          <div className='flex w-full flex-col'>
            {message.length >= 1 ? (<>
              {message.map((item,index)=>(
              <div key={index} className='my-3'>
                <div className='flex items-center justify-end w-full'>
                  <div className=" text-justify bg-slate-50 p-3 rounded-md w-fit max-w-full sm:max-w-1/2 ">{item}</div>
                </div>
                <div className='flex items-center justify-start w-full sm:w-1/2'>
                  <div className='my-2 w-full p-3 gap-3 sm:max-w-full '>
                  {pending ?
                     <div className='text-left flex flex-col gap-3 w-full items-start justify-center'>
                          <div className='bg-blue-50 p-3 rounded-md'>
                              {allResponse[index].res}
                          </div>
                              {codeBlock[index].codeBlocks && Object.keys(codeBlock[index].codeBlocks).length > 0 ?
                              (<pre className='text-left flex [&::-webkit-scrollbar]:hidden bg-black/80 rounded-lg text-white border h-[400px] p-3 scrollbar flex-col w-[300px] xl:max-w-[700px] xl:w-[500px] overflow-scroll'>
                                {codeBlock[index].codeBlocks}
                              </pre>)
                              : null}
                      </div> : (
                      <div className='animate-pulse w-full'>
                        <div className="bg-slate-500 p-3 my-3 rounded-md w-full max-w-full sm:max-w-full "></div>
                        <div className="bg-slate-500 p-3 my-3 rounded-md w-full max-w-full sm:max-w-full "></div>
                        <div className="bg-slate-500 p-3 my-3 rounded-md w-full max-w-full sm:max-w-full "></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            </>):(
              <div className='text-center bg-green-100 flex items-center justify-center w-full' > 
                <p className='text-2xl'>No Messages</p>
              </div>
          )}
           
                
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t sm:border-none w-full sm:w-[700px] sm:max-w-[700px] flex items-center justify-center gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 border rounded"
          />
          {input && (
          <button type="submit" className="bg-blue-500 cursor-pointer hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ">
            Send
          </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Chat;