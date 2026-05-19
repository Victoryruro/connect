import React from 'react'
import Header from './Components/header/Header'
import Homepages from './Components/home/Homepage'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      <Routes>

        <Route path="/" Component={Homepages} />
        {/* <Route path="/fashion" element={<Fashion />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/music" element={<Music />} />
        <Route path="/review" element={<Review />} /> */}
      </Routes>
        
      </BrowserRouter>
      


    </>
  )
}

export default App
