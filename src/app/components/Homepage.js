"use client"
import Link from "next/link";
import {  useState } from "react";
import { AnimatePresence, motion,  } from "framer-motion";
import { buttonVariants, eachDiv } from "./animation";

const HomePage = () => {
   
    const [showFaqs,setShowFaqs] = useState("")
    const [email,setEmail] = useState("")
    const [waitList,setWaitList] = useState(false)
    const [success,setSuccess] = useState(false)
    const cases = [
        {icon: "📅",title: "For Productivity & Personal Use",description: "Manage tasks, set reminders, and get smart suggestions",},
        {icon: "🛍️",title: "For E-Commerce & Sales",description: "Answer customer questions, recommend products, and close deals."},
        {icon: "🎓",title: "For Students & Researchers",description: "Simplify studying, get summaries, and find quick explanations."},
        {icon: "✍️",title: "For Writers & Creators",description: "Generate ideas, rewrite content, and get AI-powered editing."},
        {icon: "👨‍💻",title: "For Developers",description: "Use the chatbot for code generation, and debugging assistance."},
    ]
    const faqs = [
        {title: "What is this AI chatbot?",answer: " It’s an AI-powered assistant that helps with answering questions, generating text, and automating tasks."},
        {title: "Is the chatbot free to use?",answer: "Yes the chatbot is free to use"},
        {title: "Do I need an account to use it?",answer: "No, you can start chatting instantly."},
        {title: "How accurate are the AI-generated responses?",answer: "The chatbot is trained on vast datasets and provides accurate responses, but we recommend verifying critical information."},
        {title: "How do I contact support?",answer: "You can reach us via email or live chat for any inquiries."},
    ]
    const handleSubmit = (e)=>{
        e.preventDefault();
        setEmail("")
        setWaitList(false)
        setTimeout(() => {
            setSuccess(true)
        }, 2000);
        setTimeout(() => {
            setSuccess(false)
        }, 5000);
    }
    return ( 
        <div  className="relative  flex flex-col gap-20 items-center text-center justify-center w-full mx-5 md:mx-20 ">
            {/* Headline */}
            <motion.div className="my-20 flex leading-8 flex-col gap-5 p-3 w-full items-center"
            variants={eachDiv}
            initial="initial"
            whileInView="animate"
            viewport="viewport"
            >
                <h1 className="font-bold text-5xl  ">Talk to AI. Get Instant Answers. Save Time.</h1>
                <h2 className="font-semibold mt-2 text-lg"> <em>An AI-powered chatbot that understands you. Get instant responses, automate tasks, and boost productivity - all with a simple chat </em></h2>
                <div className="w-full mt-5 flex justify-center items-center gap-20">
                    <motion.div
                     variants={buttonVariants}
                     initial="initial"
                     animate="animate"
                     whileHover="hover"
                     whileTap="tap"
                     >
                    <div onClick={()=>setWaitList(true)} className="bg-black w-fit cursor-pointer py-1 px-2 text-white rounded-md shadow-lg  z-10 shadow-blue-600"
                   ><em>Join Waitlist</em></div>

                   </motion.div>
                   <motion.div
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    whileTap="tap"
                    >

                    <Link className="bg-black w-[150px] p-3 text-white rounded-md shadow-lg  z-10 shadow-blue-600" href="/Chat"
                   ><em>Try Now!</em></Link>
                   </motion.div>
                </div>
            </motion.div>
                {/* Features and Benefits */}
            <motion.div className="flex flex-col w-full items-center justify-center"
            variants={eachDiv}
            initial="initial"
            whileInView="animate"
            viewport="viewport">
                <h2 className="font-semibold text-3xl text-center">AI That Works for You - Instantly</h2>
                <h3 className=""><em>powered by advanced AI, our chatbot delivers fast, intelligent, and secure conversations. Whether for business, learning, or personal use, it adapts to your needs</em></h3>
            </motion.div>
                {/* Use Case */}
            <div className="flex flex-col items-center my-10 justify-center mx-auto "
            
            >
                <motion.h2 className="font-semibold mb-3"
                variants={eachDiv}
                initial="initial"
                whileInView="animate"
                viewport="viewport"
                >AI for Everyone - How It Helps You</motion.h2>
                <motion.h3 className=""
                variants={eachDiv}
                initial="initial"
                whileInView="animate"
                viewport="viewport"
                ><em>Whether you need instant answers, smart automation, or a personal assistant, our AI chatbot is designed for you. See how it can make your life easier</em></motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 grid-rows-3 p-3 gap-3 items-center justify-start w-full ">
                    {cases.map((item,index)=>(
                        <motion.div key={index} className="flex flex-col p-3 gap-3 rounded-lg h-fit sm:h-[150px] items-start justify-center bg-blue-50"
                        variants={eachDiv}
                        initial="initial"
                        whileInView="animate"
                        viewport="viewport"
                        > 
                            <div className="flex items-center justify-center gap-3">
                                <p className="text-3xl">{item.icon}</p>
                                <p className="font-semibold text-left">{item.title}</p>
                            </div>
                            <div className="">{item.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* CTA */}
            <motion.div className="w-full mt-5 flex leading-8 justify-center items-center gap-20"
            variants={eachDiv}
            initial="initial"
            whileInView="animate"
            viewport="viewport">
                    <motion.div
                     variants={buttonVariants}
                     initial="initial"
                     animate="animate"
                     whileHover="hover"
                     whileTap="tap"
                     >
                    <div onClick={()=>setWaitList(true)} className="bg-black w-fit cursor-pointer py-1 px-2 text-white rounded-md shadow-lg  z-10 shadow-blue-600"
                   ><em>Join Waitlist</em></div>

                   </motion.div>
                   <motion.div
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    whileTap="tap"
                    >

                    <Link className="bg-black w-[150px] p-3 text-white rounded-md shadow-lg  z-10 shadow-blue-600" href="/Chat"
                   ><em>Try Now!</em></Link>
                   </motion.div>
            </motion.div>

            {/* FAQs */}
            <div className="flex flex-col gap-3 items-start p-3 my-10 w-full justify-center "
            
            >
                {faqs.map((item,index)=>(
                    <motion.div key={index} className="flex transition-all text-sm sm:text-lg flex-col items-start justify-center gap-3"
                    variants={eachDiv}
                    initial="initial"
                    whileInView="animate"
                    viewport="viewport"
                    >
                        <div className="flex gap-3">
                            <p className="font-semibold text-left flex gap-3">
                                <span className="text-2xl">❓</span>
                                <span className="">{item.title}</span>
                            </p>
                            <p onClick={()=>{{item.title === showFaqs ? setShowFaqs(""):  setShowFaqs(item.title)}}} className="uppercase cursor-pointer font-bold">[+]</p>
                        </div>
                        
                        {showFaqs === item.title && <div className="flex gap-3">
                            <span className="text-2xl">💬</span>
                            <span><em>{item.answer}</em></span>
                        </div>}
                    </motion.div>
                ))}
            </div>

            {/* Join WaitList */}
            <AnimatePresence>
                {waitList &&
                <motion.div className=" max-w-full min-w-fit w-[300px] sm:max-w-[500px] sm:w-[400px] shadow-lg fixed top-0  h-[200px] rounded-2xl bg-white z-10  flex flex-col items-center justify-center p-3 "
                initial={{
                    opacity: 0,
                    scale: 1.2,
                    y: "-100vh"
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition:{
                        duration: 1
                    }
                }}
                exit={{
                    opacity: 0,
                    scale: 1.2,
                    y: "-100vh"
                }}
                >
                    <div onClick={()=>setWaitList(false)} className="flex w-full cursor-pointer items-center justify-end text-lg font-semibold">X</div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center justify-center w-full">
                        <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter email.." required className="w-full border bg-transparent text-lg py-3 px-5 rounded-lg" />
                        <button type="submit" className=" cursor-pointer flex bg-blue-50 p-3 rounded-md w-fit items-center justify-center font-semibold"><em>Join Waitlist</em></button>
                    </form>
                </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence

            >
                {success && <motion.div className="absolute top-5 flex items-center justify-center w-full p-5 rounded-md shadow-md text-lg transition-all "
                initial={{
                    opacity: 0,
                    scale: 1.2,
                    y: "-100vh"
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition:{
                        duration: 1
                    }
                }}
                exit={{
                    opacity: 0,
                    scale: 1.2,
                    y: "-100vh"
                }}
                > <em> ✔ Successfully Join Waitlist </em> </motion.div>}
            </AnimatePresence>
        </div>
     );
}
 
export default HomePage;