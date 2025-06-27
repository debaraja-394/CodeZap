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
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const runCode = async () => {
    try{
      const res = await axios.post(`${BASE_URL}`,{
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
   <div className="min-h-screen w-full bg-gray-200 flex flex-col">
    <Navbar />
   <main className="flex-grow flex flex-col lg:flex-row gap-4 p-4 max-w-7xl mx-auto w-full">
    <div className="flex flex-col w-full lg:w-2/3 space-y-4">
      <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-sm">
        <LanguageSelector language={language} setLanguage={setLanguage}/>
        <RunButton onClick={runCode} />
      </div>
      <div className="flex-grow">
      <CodeEditor code={code} setCode={setCode} language={language}/>
      </div>
    </div>
    <div className="w-full lg:w-1/3">
      <OutputPanel output={output}/>
    </div>
    </main>
   </div> 
  );
}
