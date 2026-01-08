import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'
import { FaPlus } from "react-icons/fa";
import FormModal from './FormModal';
import Axios_api from '../lib/axios'


const Task = () => {
    const [data,setData]=useState([])
    const [links,setLinks]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [lastPage,setLastPage]=useState(1)
    const [open,setOpen]=useState(false)

    const fetchData=async(page=currentPage)=>{

        try {
            const response=await Axios_api.get(`/notes?page=${page}`)
            setData(response.data.data)
            setLinks(response.data.links)
            setCurrentPage(response.data.current_page)
            setLastPage(response.data.last_page)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='flex flex-col gap-6'>
        <div className="flex justify-between items-start">
            <h6 className='text-xl font-medium'>My Notes</h6>
            <button className="bg-green-700 backdrop-blur-3xl rounded-md py-1 px-2 flex items-center cursor-pointer gap-2" onClick={() => setOpen(true)}>
                <FaPlus/>New
            </button>
        </div>
        
        <FormModal open={open} close={()=>setOpen(false)} refresh={fetchData} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {data.map((i,index) => (
                <TaskCard task={i} key={index} refresh={fetchData}/>
            ))}
        </div>

        <div className="flex justify-center gap-3 mt-4">
            {links.map((link, index) => (
                <button
                    key={index}
                    disabled={!link.url || link.active}
                    onClick={() => fetchData(link.page)}

                    className={`
                        px-3 py-1 border border-gray-300
                        text-sm rounded-md
                        transition text-black
                        ${
                        link.active
                            ? "bg-gray-800 text-white cursor-default"
                            : link.url
                            ? "bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }
                    `}

                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
                ))}
            </div>

            <p className='text-center'>
                Page {currentPage} of {lastPage}
            </p>
    </div>
  )
}

export default Task