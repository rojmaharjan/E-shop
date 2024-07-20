import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import {Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Pagenotfound from './pages/Pagenotfound'
import Item_detail from './pages/Item_detail'

function Section() {
    return (
        <>
        
        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/item_detail/:item_id" element={<Item_detail/>}/>
            <Route path="/*" element={<Pagenotfound/>}/>
        </Routes>
        
        </>
    )
  
}

export default Section
