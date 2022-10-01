import * as React from 'react';



const Navbar = () => {


    return (
        <div>
            <div className="flex justify-between items-center py-4 bg-yellow-900">
                <div className="flex-shrink-0 ml-10 cursor-pointer">
                    <i className="fas fa-drafting-compass fa-2x text-orange-500"></i>
                    <span className="ml-1 text-3xl text-blue-200 font-semibold">5 Kim Long</span>
                </div>
                <div className="flex lg:ml-6">
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only" placeholder="Search">Search</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                        </svg>
                    </a>
                </div>
                <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
                <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
                    <select>

                    </select>
                    <li className="mr-6 p-1">
                        <a className="text-white hover:text-blue-300" href="#">Home</a>
                    </li>
                    <li className="mr-6 p-1">
                        <a className="text-white hover:text-blue-300" href="#">Di Động</a>
                    </li>
                    <li className="mr-6 p-1">
                        <a className="text-white hover:text-blue-300" href="#">Lap Top</a>
                    </li>
                    <li className="mr-6 p-1">
                        <a className="text-white hover:text-blue-300" href="#">Máy tính bảng</a>
                    </li>
                    <li className="mr-6 p-1">
                        <a className="text-white hover:text-blue-300" href="#">Tivi</a>
                    </li>
                    <div>
                        <select
                            className="form-select h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:text-sm">
                            <option value="html">HTML</option>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;