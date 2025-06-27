export default function Navbar({ toggle, setToggle }){
    return(
        <header className="w-full sticky top-0 z-50">
            <nav className={`flex justify-between items-center px-6 py-4 bg-${ toggle ? 'black' : 'white'}/70 backdrop-blur-md border-b border-gray-200 shadow-lg rounded-b-2xl`}>
            <i 
            className={`fa-solid fa-${toggle ? 'toggle-off text-white' : 'toggle-on'} relative top-[10px] z-10 text-3xl cursor-pointer`}
            onClick={() => setToggle(prev => !prev)}
            ></i>
                <div className="flex items-center gap-3">
                    <span className="text-blue-300 text-3xl"><i className="fa-solid fa-bolt"></i></span>
                    <h1 className={`text-2xl font-bold tracking-tight ${ toggle ? 'text-green-400' : 'text-grey-800'} drop-shadow-sm select-none`}
                    >
                        CodeZap
                    </h1>
                </div>
                <span className="text-sm font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded-full shadow-inner border border-gray-200">v1.0.0</span>
            </nav>
        </header>
    )
}