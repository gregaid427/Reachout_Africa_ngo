import React from "react";


const Login = () => {
  return (
    <>
      
     <div className="flex item-center justify-center ">
      
     <div name='contact' className=' w-full h-screen bg-slate-600  flex justify-center items-center p-4'>
        <form action='' className='flex flex-col max-w-[300px] w-full'>
          <div className='pb-8 text-center' >
          <p className='text-4xl font-bold inline  border-b-4 border-white text-gray-300 text-center' >Login</p>
       
          </div>

          
          <input className='my-4 p-2 bg-[#ccd] ' type={"Email"} placeholder="Email" name='Email'></input>
          <input className='bg-[#ccd] p-2' type={"Password"} placeholder="Password" name='password'></input>
          <button className='text-white border-2 hover:bg-red-600 hoverborder-pink-500 px-4 py-3 my-8 mx-auto flex items-center'> Submit </button>
        </form>
      </div>
     </div>
    </>
  );
};

export default Login;
