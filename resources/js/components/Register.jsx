import { FaSpinner } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const Register = () => {

  const [loading,setLoading] = useState(false)
  const [error,setError] = useState({})
  const {register} = useAuth()

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password_confirmation:''
  })

  const handleChange = async (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setError({})
    setLoading(true)

    try {
      await register(formData)
      setError({})
    } catch (err) {
      if (err.response?.data?.errors){
        setError(err.response.data.errors)
      }else{
        setError({general: err.response?.data?.errors || 'Registration failed'})
      }

    } finally{
      setLoading(false)

    }


  }

  return (
    <div className="isolate min-h-screen rounded-xl bg-gray-900 px-6 py-26 sm:py-26 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Create new account</h2>
        <p className="mt-2 text-lg/8 text-gray-400">Sign up to continue</p>
      </div>

      {error.general && 
        <p className='text-red-400 font-semibold flex justify-center gap-3 items-center mt-3'><IoIosWarning /> {error.general}</p>
      }
      <form action="#" method="POST" className="mx-auto mt-5 max-w-xl sm:mt-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm/6 font-semibold text-white">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={(e)=>handleChange(e)}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
              {error.name && 
                  <p className='text-red-400 font-semibold flex justify-center gap-3 items-center mt-3'><IoIosWarning /> {error.name[0]}</p>
              }
            </div>
            
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e)=>handleChange(e)}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />

              {error.email && 
              <p className='text-red-400 font-semibold flex justify-center gap-3 items-center mt-3'><IoIosWarning /> {error.email[0]}</p>
            }
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="password" className="block text-sm/6 font-semibold text-white">
              Password
            </label>
            <div className="mt-2.5">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={(e)=>handleChange(e)}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
              {error.password && 
              <p className='text-red-400 font-semibold flex justify-center gap-3 items-center mt-3'><IoIosWarning /> {error.password[0]}</p>
            }
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="password_confirmation" className="block text-sm/6 font-semibold text-white">
              Confirm Password
            </label>
            <div className="mt-2.5">
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                value={formData.password_confirmation}
                onChange={(e)=>handleChange(e)}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
              {error.password_confirmation && 
              <p className='text-red-400 font-semibold flex justify-center gap-3 items-center mt-3'><IoIosWarning /> {error.password_confirmation[0]}</p>
            }
            </div>
          </div>
          
        </div>
        <div className="mt-10">
         
            {loading ? (
                <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 flex justify-center gap-3 items-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                       <FaSpinner /> Signing up
                </button>
            ) : (

                <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Sign up
                </button>

            )}
         
        </div>
        <div className="flex justify-end mt-5">
            <Link to='/login' className='hover:underline'>Already have an account ?</Link>
        </div>
      </form>
    </div>
  )
}

export default Register