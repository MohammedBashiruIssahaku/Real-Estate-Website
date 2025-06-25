import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
    <p className='text-blue-500'>Hello world</p>
      <Outlet/>
    </>
  )
}

export default App
