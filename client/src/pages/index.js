import { useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import LanguageSelector from "@/components/LanguageSelector";
import Navbar from "@/components/Navbar";
import OutputPanel from "@/components/OutputPanel";
import RunButton from "@/components/RunButton";
import axios from "axios";
import Image from "next/image";
export default function Home() {

  const [ code, setCode ] = useState('');
  const [ language, setLanguage ] = useState('python');
  const [ output, setOutput ] = useState('');
  const [ toggle, setToggle ] = useState(false);
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

  const runCode = async () => {
    try{
      const res = await axios.post(`${BASE_URL}/run`,{
        code,language
      })
      
      setOutput(res.data.output);
      if(res.status === 400){
        console.log("hello");
      }
   } catch (err) {
    
   }
  }
  return (
   <div className={`min-h-screen w-full ${ toggle ? 'bg-gray-800' : 'bg-gray-200'} flex flex-col`}>
    <Navbar toggle={toggle} setToggle={setToggle}/>
   <main className="flex-grow flex flex-col lg:flex-row gap-4 p-4 max-w-7xl mx-auto w-full">
    <div className="flex flex-col w-full lg:w-2/3 space-y-4">
      <div className={`flex items-center justify-between ${ toggle ? 'bg-gray-700' : 'bg-white'} p-2 rounded-lg shadow-sm`}>
        <LanguageSelector language={language} setLanguage={setLanguage}/>
        <RunButton onClick={runCode} />
      </div>
      <div className="flex-grow">
      <CodeEditor code={code} setCode={setCode} language={language} toggle={toggle}/>
      </div>
    </div>
    <div className="w-full lg:w-1/3">
      <OutputPanel output={output} toggle={toggle}/>
    </div>
    </main>
   </div> 
  );
}
