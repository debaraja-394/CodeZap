import { useState } from "react"

export default function OutputPanel({ output }){
    const [ isCopied, setIsCopied ] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(output || '');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    };
    return(
      <div className="flex flex-col w-full h-full border border-grey-400 rounded-lg shadow-md bg-grey-50">
        <div className="flex justify-between items-center p-2 bg-gray-200 rounded-t-lg border-b border-gray-300">
            <span className="text-sm font-semibold text-black">Output</span>
            <button
            onClick={handleCopy}
                    className={`px-2 py-1 text-xs font-medium rounded-md transition-colors duration-200 ${
                        isCopied ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    }`}
                    title="Copy to clipboard"
            >
            { isCopied ? 'Copied!' : 'Copy'}
            </button>
        </div>
        <div className="relative flex-grow h-48 overflow-y-auto bg-white p-4 font-mono text-sm text-gray-800">
                <pre className="whitespace-pre-wrap">{output || 'Output will appear here'}</pre>
            </div>
      </div> 
    )
}