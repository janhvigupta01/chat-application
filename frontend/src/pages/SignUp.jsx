import React from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  let navigate = useNavigate()
  return (
    <div className='w-full h-screen bg-slate-200 flex items-center justify-center'>
      <div className='w-full max-w-125 h-150 bg-white rounded-lg shadow-gray-400 shadow-lg flex flex-col gap-7.5'>
        <div className='w-full h-50 bg-[#20c7ff] rounded-b-[30%] shadow-gray-400 shadow-lg flex items-center justify-center'>
          <h1 className='text-gray-600 font-bold text-[30px]'>Welcome to <span className='text-white'>chatly</span></h1>
        </div>
        <form className='w-full flex flex-col gap-5 items-center'>
          <input type="text" placeholder="username" className='w-[90%] h-12.5 outline-none border-2 border-[#20c7ff] px-5 py-2.5 bg-[white] rounded-lg shadow-gray-200 shadow-lg ' />
          <input type="email" placeholder="email" className='w-[90%] h-12.5 outline-none border-2 border-[#20c7ff] px-5 py-2.5 bg-[white] rounded-lg shadow-gray-200 shadow-lg ' />
          <div className='w-[90%] h-12.5 border-2 border-[#20c7ff] overflow-hidden rounded-lg shadow-gray-200 shadow-lg'>
            <input type="password" placeholder="password" className='w-[90%] h-12.5 outline-none px-5 py-2.5 bg-[white]  ' />
          </div>
          
          <button className='px-5 py-2.5 bg-[#20c7ff] rounded-2xl shadow-gray-400 shadow-lg text-[20px] w-50 mt-5 font-semibold hover:shadow-inner'>sign up</button>
          <p className='cursor-pointer' onClick={()=>navigate("/login")}>Already Have An Account ? <span className='text-[#20c7ff]'>Login</span></p>
        </form>
      </div>
      
    </div>
  )
}

export default SignUp
