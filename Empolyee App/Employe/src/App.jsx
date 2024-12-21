import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Editss from './components/Editss'
import { Route, Routes } from 'react-router-dom'
import Viewss from './components/Viewss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar /><br /><br /><br />
      <Routes>
        <Route path='/Add' element={<Editss />} />
        <Route path='/views' element={<Viewss />} />
      </Routes>
      
    
      
    </>
  )
}

export default App
