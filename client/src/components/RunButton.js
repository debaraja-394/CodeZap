export default function RunButton({ onClick }){
    return(

            <button
             onClick={onClick}
             className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold text-lg px-4 py-2 rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
            Run Code
            <i className="fa-solid fa-person-running text-xl"></i>
            </button>

    )
}