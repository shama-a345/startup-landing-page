import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer, Home, Navbar } from './Pages'

const App = () => {
  return (
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App