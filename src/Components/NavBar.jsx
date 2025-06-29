import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'



const NavBar = () => {
       
  const [toggle, setToggle] = useState(false);


  const handleToggle = ()=>
  {
      setToggle(!toggle);
      
  }





  const navItems = [
    {path: '/', Link: "Home"},
    {path: '/properties', Link: "Properties"},
    {path: '/agents', Link: "Agents"},
    {path: '/blog', Link: "Blog"},

  ]
  
  
  
  
  
  
  
  
  return (
    <div className='flex  justify-between items-center py-10 px-40  w-full'>
         <div className='flex justify-center items-center '>
             <img src="/images/logo.png" alt="logo" className='h-18 w-16 ' />
             <p className='font-semibold text-2xl'>Salman <br />
              <span className='float-right text-sm text-gray-500'>.com</span></p>
         </div>

         <div className='w-2/4 flex justify-end items-center font-semibold text-lg space-x-16   '>
             {
            navItems.map(({path, Link})=> (
              <ul key={path} className=''>
                    <NavLink to={path}>{Link}</NavLink>
                    
              </ul>
              
             
            )
            )
        }
        <div>
           <p onClick={()=> handleToggle()} className='cursor-pointer hover:underline ' > 
           Contact
          {
             toggle ? 
             <div >
             <ul className='absolute border-2 bg-gray-400 h-36 w-62 '>
              <li>Whatsapp</li>
              <li>Email</li>
              <li>Phone Number</li>
             </ul>
           </div> : ""
          }
         
           </p>
        </div>
         


           

        
         </div>
        
    </div>
  )
}

export default NavBar
