import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import Settings from "./Settings";

export default function CodeEditor({ code, setCode, language, toggle}){
    const [ showSettings, setShowSettings ] = useState(false);
    const [editorOptions, setEditorOptions] = useState({ 
        fontSize: 16,
        tabSize: 4,
        lineNumbers: "on",
        minimap: {enabled: false},
        fontFamily:"Fira Code, monospace",
        fontLigatures:true,
        foldingStrategy: "indentation",
        folding: true,
        matchBrackets: "always",
        quickSuggestions: true,
        formatOnPaste: true,
        wordWrap: "on",
    });
    return(
        <div className="relative">
        <button
            className="absolute z-10 cursor-pointer"
            onClick={() => setShowSettings((prev) => !prev)}
            title="Editor Settings"
        >
            <i className="fa-solid fa-gear fa-1x"></i>
        </button>
        {showSettings && <Settings editorOptions={editorOptions} setEditorOptions={setEditorOptions} onClose={() => setShowSettings(false)} />}
            <Editor 
                height="80vh"
                defaultLanguage={language}
                value={code}
                onChange={(value) => setCode(value)}
                theme={`${ toggle ? 'vs-dark' : 'vs-white'}`}
                options={editorOptions}
            />
        </div>
    )
}