import React, { useState, useEffect } from 'react'
import './App.css'
import { useColorMode } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Home from './components/Homepage'
import Movielist from './components/Movielist'
import Navbar from './components/Navbar'
import Moviedesc from './components/Moviedesc'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    let res = colorMode === 'light' ? toggleColorMode() : null
    return () => {}
  }, [])

  return (
    <div id="list-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movielist />} />
          <Route path='/desc' element={<Moviedesc/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
