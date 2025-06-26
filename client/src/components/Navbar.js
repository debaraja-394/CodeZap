export default function Navbar(){
    return(
        <header className="w-full sticky top-0 z-50">
            <nav className="flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-lg rounded-b-2xl">
                <div className="flex items-center gap-3">
                    <span className="text-blue-300 text-3xl"><i className="fa-solid fa-bolt"></i></span>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-800 drop-shadow-sm select-none">CodeZap</h1>
                </div>
                <span className="text-sm font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded-full shadow-inner border border-gray-200">v1.0.0</span>
            </nav>
        </header>
    )
}