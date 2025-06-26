import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

const Properties = () => {

  const[homes, setHomes] = useState([]);
  const[currentPage , setCurrentPage] = useState(1);
  const pageSize = 12;


  

  useEffect(()=>
  {
      async function fetchData()
      {
          const url = "http://localhost:3000/properties";
          const response = await fetch(url);
          const data = await response.json();
          setHomes(data);
      }
      fetchData();
  } , [homes]
)

  return (

        <div className='bg-gray-200'>

         

          {/*category section */}
          <div>
            
          </div>




         <div className='flex flex-wrap py-20 px-20 gap-16 justify-center items-center  '>
        {
            homes.map((house)=> 
              <div key={house.id}>
                    <img src={house.image} alt="home" className='w-60 rounded-3xl h-44' />
                    <p className='text-black font-semibold text-center'>{house.title}</p>
                    <p>{house.location}</p>
                    <p className='border-2 absolute text-blue-500 font-bold'>ROOMS: {house.bedrooms}</p>
                    

                  
              </div>
            )
        }
    </div>


     {/* handle pagination */}
          <div>
            <Pagination/>
          </div>

        </div>


    
  )
}

export default Properties
