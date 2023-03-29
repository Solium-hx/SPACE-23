import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './components/Title'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Map from './components/Map'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="App">
      <Title></Title>
      <div className='main'>
        <Routes className='content'>
          <Route path='/' element={<Content />}/>
          <Route path='/org_committee' element={<About />}/>
          <Route path='/prog_committee' element={<About />}/>
          <Route path='/accepted_papers' element={<About />}/>
          <Route path='/submit_paper' element={<About />}/>
          <Route path='/speakers' element={<About />}/>
          <Route path='/registeration' element={<About />}/>
          {/* <Route path='/location' element={<Map />}/> */}
          <Route path='/about' element={<About />}/>
          <Route path='/iitr' element={<About />}/>
        </Routes>
        <Sidebar className='side'/>
      </div>
    </div>
    </>
  )
}

export default App
