import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">

                
            <h1 className='text-lg font-bold'>Notes</h1>
            <ul className="flex gap-3 text-neutral-300">
                <li>All Notes</li>
                <li>Today's Notes</li>
            </ul>
            </div>
            </div>
        </nav>
    </>
    
  )
}

export default Navbar