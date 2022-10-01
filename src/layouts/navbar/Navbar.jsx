import {BiHomeAlt,BiUser,BiBriefcaseAlt,BiMessage,BiUserVoice,BiTask} from 'react-icons/bi'
const Navbar = () => {
  return (
    <div className="w-64 h-full" > 
      <ul className="space-y-2" style={{height: '100vh' }}>
         <li>
            <a href="#" className="flex items-center p-2 bg-amber-200 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <BiHomeAlt size = "1.5rem"/>
               <span className="ml-3">Home</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 bg-amber-200 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <BiUser size = "1.5rem"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 bg-amber-200 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <BiUserVoice size = "1.5rem"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Admin</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2  bg-amber-200 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <BiTask size = "1.5rem"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Acountants</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2  bg-amber-200 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <BiBriefcaseAlt size = "1.5rem"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </a>
         </li>
      </ul>

    </div>
  )
}
export default Navbar;