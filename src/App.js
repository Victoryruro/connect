import React from 'react'
import './App.css'
import Header from './Components/header/Header'
import Homepages from './Components/home/Homepage'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Footer from './Components/footer/Footer'
import TechPage from './Components/Techpage/TechPage'
import Fashion from './Components/Fashion/Fashion'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      <Routes>

        <Route path="/" Component={Homepages} />
        <Route path="/TechPage" Component={TechPage} />
        <Route path="/Fashion" Component={Fashion} />
        {/* <Route path="/fashion" element={<Fashion />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/music" element={<Music />} />
        <Route path="/review" element={<Review />} /> */}
      </Routes>
        
      </BrowserRouter>
        <Footer />
      


    </>
  )
}

export default App
