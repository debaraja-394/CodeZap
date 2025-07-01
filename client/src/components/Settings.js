export default function Settings({ editorOptions, setEditorOptions, onClose }){
    return(
        <div className="absolute top-12 right-2 z-20 bg-white/30 backdrop-blur-md border border-white/30  rounded-lg shadow-lg p-4 max-w-md">
            <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg font-bold cursor-pointer"
                onClick={onClose}
                aria-label="Close"
            >
                ×
            </button>
            <div className="mb-2 font-bold">Editor Settings</div>
            <label className="block mb-2">
                Font Size:
                <input
                type="number"
                min={10}
                max={32}
                value={editorOptions.fontSize}
                onChange={(e) =>
                    setEditorOptions((opts) => ({
                    ...opts,
                    fontSize: Number(e.target.value),
                    }))
                }
                className="ml-2 border rounded px-2 py-1 w-16"
                />
            </label>
            <label className="block mb-2">
                Tab Size:
                <input
                type="number"
                min={2}
                max={8}
                value={editorOptions.tabSize}
                onChange={(e) =>
                    setEditorOptions((opts) => ({
                    ...opts,
                    tabSize: Number(e.target.value),
                    }))
                }
                className="ml-2 border rounded px-2 py-1 w-16"
                />
            </label>
            <label className="block mb-2">
                Line Numbers:
                <select
                value={editorOptions.lineNumbers}
                onChange={(e) =>
                    setEditorOptions((opts) => ({
                    ...opts,
                    lineNumbers: e.target.value,
                    }))
                }
                className="ml-2 border rounded px-2 py-1"
                >
                <option value="on">On</option>
                <option value="off">Off</option>
                </select>
            </label>
            <label className="block mb-2">
                Word Wrap:
                <select
                value={editorOptions.wordWrap}
                onChange={(e) =>
                    setEditorOptions((opts) => ({
                    ...opts,
                    wordWrap: e.target.value,
                    }))
                }
                className="ml-2 border rounded px-2 py-1"
                >
                <option value="on">On</option>
                <option value="off">Off</option>
                <option value="wordWrapColumn">Word wrap column</option>
                <option value="bounded">Bounded</option>
                </select>
            </label>
            <label className="block mb-2">
                Folding: 
                <select
                value={editorOptions.folding}
                onChange={(e) =>
                    setEditorOptions((opts) => ({
                    ...opts,
                    folding: e.target.value,
                    }))
                }
                className="ml-2 border rounded px-2 py-1"
                >
                <option value="true">On</option>
                <option value="false">Off</option>
                </select>
            </label>
            {/* Add more settings as needed */}
            </div>
    )
}

