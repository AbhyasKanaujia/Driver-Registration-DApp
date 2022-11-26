import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { contractAddress } from './constants'
import DriverRegistration from './contracts/DriverRegistration.json'

import { Header, Footer } from './components'
import { Home, Register, Status } from './screens'

import './App.css'
import { BlackBg } from './assets'

function App() {
  const [account, setAccount] = useState('')

  if (!window.ethereum) return <h1>Please isntall Metamask first</h1>

  return (
    <BrowserRouter>
      <Header account={account} setAccount={setAccount} />
      <main
        style={{
          backgroundImage: `url(${BlackBg})`,
          backgroundSize: 'cover',
          minHeight: '90vh',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
