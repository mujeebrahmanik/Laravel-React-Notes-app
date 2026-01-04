import { MdEdit,MdDelete  } from "react-icons/md";

const TaskCard = (props) => {
  return (
    <div className='backdrop-blur-6xl bg-white/10 rounded-lg border-2border border-white/20 shadow-xl flex flex-col p-3 gap-4'>
        <div className="flex justify-between">
            <h3 className="text-sm text-white font-semibold bg-cyan-600 backdrop-blur-xl capitalize  rounded-md px-4 py-1">
                    {props.task.category}
            </h3>
            
        </div>
        <p className='font-semibold text-lg capitalize'>
           {props.task.content} 
        </p>

        <div className="flex justify-end gap-3">
            <button className="border-green-300/50 rounded-lg border-2 p-1 cursor-pointer hover:bg-green-300/50">
                <MdEdit/>
            </button>

            <button className="border-red-300/50 rounded-lg border-2 p-1 cursor-pointer hover:bg-red-300/50">
                <MdDelete/>
            </button>
        </div>

    </div>
  )
}

export default TaskCard