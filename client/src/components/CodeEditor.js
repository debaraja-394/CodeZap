import { Editor } from "@monaco-editor/react"

export default function CodeEditor({ code, setCode, language}){
    return(
        <div>
            <Editor 
                height="80vh"
                defaultLanguage={language}
                value={code}
                onChange={(value) => setCode(value)}
                theme="vs-dark"
            />
        </div>
    )
}