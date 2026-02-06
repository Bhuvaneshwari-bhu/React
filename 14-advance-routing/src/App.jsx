import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Women from './pages/Women'
import Men from './pages/Men'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './pages/Navbar2'

const App = () => {
  const [theme, settheme] = useState('light')
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar theme={theme} settheme={settheme}/>
      <Navbar2/>
      <h2>Theme is {theme}</h2>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}>
           <Route path='women' element={<Women/>}/>
            <Route path='men' element={<Men/>}/>
             <Route path='kids' element={<Kids/>}/>
        </Route>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CourseDetails/>}/>
       
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
