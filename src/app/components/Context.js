"use client"
import { createContext, useState } from "react";
import run from "./AiConfig";
// import ReactMarkdown from "react-markdown";

export const AppContext = createContext()

const Context = ({children}) => {
    const [ham,setHam] = useState(false)
    const [pending,setpending] = useState(false)
    const [message,setMessage] = useState([])
    const [codeBlock,setCodeBlock] = useState("")
    const [prompt, setPrompt] = useState([]);

  
    const [allResponse,setAllResponse] = useState([])

    //HAMBURGER FUNCTION 

    const handleHam = ()=>{
        setHam(prev => !prev)
    }

    // TO GET FORMAT CODE

      const escapeHTML = (html) => {
        return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      };
      
      const formatText = (input, setCodeBlocks,prevCodeBlock) => {
        const codeBlocks=[] ;
        const formattedText = input.split(/(```[\s\S]*?```)/g).map((part, index) => {
          if (part.startsWith("```") && part.endsWith("```")) {
            const cleanCode = part.slice(3, -3).trim();
            codeBlocks.push(cleanCode); // Store code separately
            return null; // Don't display code in this function
          }
      
          return (
            <p key={index} className="">
              {part}
            </p>
          );
        });
        setCodeBlocks([...prevCodeBlock,{codeBlocks}]);
        return formattedText;
      };
      
      const formatBoldTextAsString = (text) => {
        return text.split(/(\*\*[^*]+\*\*)/g).map((part) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return part.slice(2, -2); // Remove the ** but return as plain text
          }
          return part;
        }).join(""); // Joins everything back into a single string
      };
      
    // SEND MESSAGE FUNCTION

    const handleSendMessage = async(input)=>{
       try {
        setpending(false)
        setMessage([...message, input]);
        setPrompt([...prompt, input]);
        const {res,load} = await run(input);
        if(load === false){
            setpending(false)
            return alert("connection lost")
        }
        // let resSplit = res.split("**").join("").split("*").join("")
        let resSplit = formatBoldTextAsString(res).split("*").join("").split(",,").join("")
        const final = formatText(resSplit,setCodeBlock,codeBlock);
        setAllResponse([...allResponse, {input, res: final}]);  
        setpending(true)
       } catch (error) {
        alert("failed to connect")
        console.log(error.message)
       }
    }
    
   
    const promptDel = (item)=>{
      const newPrompt = prompt.filter((i)=> i !== item)
      setPrompt(newPrompt)
  }
 
    return ( 
        <AppContext.Provider value={{handleHam,ham,setHam,handleSendMessage,prompt,promptDel,setPrompt,message,allResponse,setAllResponse,codeBlock,pending,setpending}}>   
            {children}
        </AppContext.Provider>
     );
}
 
export default Context;