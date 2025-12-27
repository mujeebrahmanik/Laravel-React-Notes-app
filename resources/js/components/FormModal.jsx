import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import axios from '../lib/axios'
import { useState } from 'react'

export default function FormModal({
    open,
    close,
    refresh
}) {

    const [formData,setFormData]=useState({
        category:"",
        content:""
    })

    const [success,setSuccess]=useState(false)

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=> {

        e.preventDefault();

        try {
            const response = await axios.post('/notes',formData)
            setSuccess(true)

            setTimeout(()=>{
                setSuccess(false)
            },3000)

            setFormData({
                category:"",
                content:""
            })

            refresh()

        } catch (error) {
            console.error(error)
        }

    }

  return (
    <div>
      <Dialog open={open} onClose={close} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start w-full">
                  
                  <div className="mt-3 text-start sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div className="flex justify-between items-center">
                        <DialogTitle as="h3" className="text-base  font-semibold text-white">
                        Add new Note
                        </DialogTitle>
                        <button
                            type="button"
                            onClick={close}
                            className="inline-flex  justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto">
                            X
                        </button>
                    </div>
                    
                    <div className="mt-4">
                        
                         <form className="space-y-4" onSubmit={handleSubmit}>

                            {success && 
                                <h6 className='text-green-600 my-3 font-semibold'>New Task added successfully</h6>
                            }
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                Category
                                </label>
                                <input
                                type="text"
                                name='category'
                                placeholder="Enter category"
                                value={formData.category}
                                onChange={(e)=>handleChange(e)}
                                className="
                                    w-full rounded-md
                                    bg-gray-800 border border-gray-700
                                    px-3 py-2 text-sm text-white
                                    placeholder-gray-400
                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                            </div>

                            
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                Content
                                </label>
                                <textarea
                                placeholder="Enter content"
                                value={formData.content}
                                name='content'
                                onChange={(e)=>handleChange(e)}
                                className="
                                    w-full rounded-md
                                    bg-gray-800 border border-gray-700
                                    px-3 py-2 text-sm text-white
                                    placeholder-gray-400
                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                                "
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="
                                w-full rounded-md
                                bg-indigo-600 px-4 py-2
                                text-sm font-semibold text-white
                                hover:bg-indigo-500
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900
                                "
                            >
                                Save
                            </button>
                            </form>
                      
                    </div>
                  </div>
                </div>
              </div>
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
