import React from 'react'

const Navbar = () => {
    return(
        <div className="border rounded col-span-3 flex justify-between bg-gray-400 h-20">
            <div className="self-center mx-2 text-2xl"> Boolapp - Todos</div>
            <ul className="flex flex-inline self-center mx-2 text-lg">
                <li className="mx-2 hover:text-gray-600 cursor-pointer">Home</li>            
                <li className="mx-2 hover:text-gray-600 cursor-pointer">Product</li>            
                <li className="mx-2 hover:text-gray-600 cursor-pointer">Contact</li>                        
            </ul>
        </div>

    )
}

export default Navbar