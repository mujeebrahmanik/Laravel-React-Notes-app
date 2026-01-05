import React from 'react'
import { MdLogout } from "react-icons/md";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const {logout,user} = useAuth()

  const handleLogout = async (e) =>{
    e.preventDefault();
    await logout();

  }
  return (
    <>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">

                
            <h1 className='text-lg font-bold'>Notes</h1>
            {user &&
               <button className="bg-red-600 rounded-md py-1 px-2 flex items-center cursor-pointer gap-2" onClick={handleLogout}>
                <MdLogout /> Logout
              </button>
            }
           
            </div>
            </div>
        </nav>
    </>
    
  )
}

export default Navbar