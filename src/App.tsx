import React from 'react'
import './App.css'
import HeaderLogo from '../assets/header-logo.png'
import { Route, Routes } from "react-router-dom"

const DexList = React.lazy(() => import('./pages/DexList'))

function App() {
  return (
      <div className="App">
        <div className="m-auto">
          <img className="header-logo m-auto" src={HeaderLogo} alt="header logo"/>
          <Routes>
            <Route path="/" element={<DexList/>}/>
          </Routes>
        </div>
      </div>
  )
}

export default App
