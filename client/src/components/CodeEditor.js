import { Editor } from "@monaco-editor/react"

export default function CodeEditor({ code, setCode, language, toggle}){
    const option = {
        fontSize: 16,
        tabSize: 4,
        lineNumbers: "on",
        minimap: {enabled: true},
        fontFamily:"Fira Code, monospace",
        fontLigatures:true,
        foldingStrategy: "indentation",
        folding: true,
        matchBrackets: "always",
    }
    return(
        <div>
            <Editor 
                height="80vh"
                defaultLanguage={language}
                value={code}
                onChange={(value) => setCode(value)}
                theme={`${ toggle ? 'vs-dark' : 'vs-white'}`}
                options={option}
            />
        </div>
    )
}