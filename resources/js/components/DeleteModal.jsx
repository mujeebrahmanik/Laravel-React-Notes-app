import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Axios_api from '../lib/axios'
import { toast } from 'react-toastify'


const DeleteModal = ({open,close,refresh,note,pageSize,page}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios_api.delete(`/notes/${note.id}`)

            if(pageSize === 1&& page > 1){
                refresh(page - 1)
            }else{
                refresh(page)
            }
            
            toast.success('Note deleted successfully')
            close()
        } catch (error) {
            toast.error('Note delete failed')
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
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                  transition
                  className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                >
                  <div className="bg-gray-800 px-4 pt-5 pb-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start w-full">
                      
                      <div className="text-center lg:text-start sm:mt-0 sm:ml-4 sm:text-left w-full">
                        
                        <DialogTitle as="h3" className="text-base  font-semibold text-white">
                        Confirm Delete
                        </DialogTitle>
                            
                        <div className="flex justify-end gap-4 mt-4">

                            <button
                                type="button"
                                onClick={close}
                                className="inline-flex  justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto">
                                cancel
                            </button>

                            <form onSubmit={handleSubmit}>
                                <button
                                    type="submit"
                                    className="
                                     rounded-md
                                    bg-red-600 px-4 py-2
                                    text-sm font-semibold text-white
                                    hover:bg-indigo-500
                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900
                                    "
                                >
                                    Delete
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

export default DeleteModal