import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
