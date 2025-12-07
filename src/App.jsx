import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from "./pages/Home"
import Songs from './pages/Songs'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/songs/:title' Component={Songs}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App