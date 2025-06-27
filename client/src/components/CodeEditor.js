import { Editor } from "@monaco-editor/react"

export default function CodeEditor({ code, setCode, language, toggle}){
    return(
        <div>
            <Editor 
                height="80vh"
                defaultLanguage={language}
                value={code}
                onChange={(value) => setCode(value)}
                theme={`${ toggle ? 'vs-dark' : 'vs-white'}`}
            />
        </div>
    )
}