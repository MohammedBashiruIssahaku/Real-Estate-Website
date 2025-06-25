import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="bg-[url('/images/house.jpg')] bg-cover bg-center h-screen w-[80rem] mx-auto rounded-[50px] relative">

      <div className='py-20 px-20  '>
         <h1 className='text-7xl font-semibold'>Easy way to find a <br />perfect property </h1>
      
      </div>
   
      </div>



      {/*section 2 */}

      <div className='flex-wrap flex py-10 justify-center items-center space-x-10'>
        <div className='relative'>
           <img src="./images/Accra.jpg" alt="" className='h-96 w-46 rounded-3xl' />
           <p className='absolute inset-0 flex justify-center text-4xl font-bold'>Accra</p>
        </div>

        <div className=''>
           <img src="./images/Tamale.jpg" alt="" className='h-96 w-46 rounded-3xl' />
        </div>

        <div className=''>
           <img src="./images/Sunyani.jpg" alt="" className='h-96 w-46 rounded-3xl' />
        </div>

      </div>








      
      
    </div>
  )
}

export default Home
