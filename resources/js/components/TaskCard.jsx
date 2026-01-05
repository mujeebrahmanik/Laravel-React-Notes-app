import { MdEdit,MdDelete  } from "react-icons/md";
import moment from "moment";
import { useState } from "react";
import EditModal from "./EditModal";

const TaskCard = (props) => {
    const [editOpen,setEditOpen] = useState(false)

    const openEdit = () =>{
        setEditOpen(true)
    }
  return (
    <div className='backdrop-blur-6xl bg-white/10 rounded-lg border-2border border-white/20 shadow-xl flex flex-col p-4 gap-5'>
        <div className="flex justify-between">

            {props.task.status == 'pending' &&
                <h3 className="inline-block text-sm font-semibold text-red-500  border-red-200  bg-red-100 rounded-full px-4 py-0.5 capitalize backdrop-blur-md border shadow-sm">
                    {props.task.status}
                </h3>
            }

            {props.task.status == 'in process' &&
                <h3 className="inline-block text-sm font-semibold text-cyan-800  border-cyan-200  bg-cyan-100 rounded-full px-4 py-0.5 capitalize backdrop-blur-md border shadow-sm">
                    {props.task.status}
                </h3>
            }

            {props.task.status == 'completed' &&
                <h3 className="inline-block text-sm font-semibold text-green-800  border-green-200  bg-green-100 rounded-full px-4 py-0.5 capitalize backdrop-blur-md border shadow-sm">
                    {props.task.status}
                </h3>
            }

            
            
        </div>
        <p className='font-semibold text-lg capitalize'>
           {props.task.task} 
        </p>

        <div className="flex justify-between items-center">
            
            <p className='text-sm capitalize text-white/40'>
            {moment(props.task.created_at).format('D MMM YYYY')}
            </p>

            <div className="flex  gap-1">
                <button className="border-green-300/50 rounded-lg border-2 p-1 cursor-pointer hover:bg-green-300/50" onClick={openEdit}>
                    <MdEdit/>
                </button>

                <button className="border-red-300/50 rounded-lg border-2 p-1 cursor-pointer hover:bg-red-300/50">
                    <MdDelete/>
                </button>
            </div>
            
        </div>

        {editOpen && 
            <EditModal open={editOpen} close={()=>setEditOpen(false)} refresh={props.refresh}/>
        }

    </div>
  )
}

export default TaskCard