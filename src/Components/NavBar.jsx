import React from 'react'

import { NavLink } from 'react-router-dom'



const NavBar = () => {

  const navItems = [
    {path: '/', Link: "Home"},
    {path: '/properties', Link: "Properties"},
    {path: '/agents', Link: "Agents"},
    {path: '/blog', Link: "Blog"},
  ]
  
  
  
  
  
  
  
  
  return (
    <div className='flex justify-between items-center py-10 px-40'>
         <div className='flex justify-center items-center '>
             <img src="/images/logo.png" alt="logo" className='h-18 w-16 ' />
             <p className='font-semibold text-2xl'>Salman <br />
              <span className='float-right text-sm text-gray-500'>.com</span></p>
         </div>

         <div className='w-3/4 flex justify-center items-center font-semibold text-lg space-x-16 ml-24 '>
             {
            navItems.map(({path, Link})=> (
              <ul key={path}className='' >
                    <NavLink to={path}>{Link}</NavLink>
              </ul>
             
            )
            
            )
        }

        <button className='border-4 w-40 h-14 rounded-2xl border-blue-300 text-blue-300'>Log In</button>
         </div>
        
    </div>
  )
}

export default NavBar
