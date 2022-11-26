import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { contractAddress } from './constants'
import DriverRegistration from './contracts/DriverRegistration.json'

import { Header, Footer } from './components'
import { Home, Register, View } from './screens'

import './App.css'

function App() {
  const [account, setAccount] = useState('')

  const connect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setAccount(accounts[0])
      } catch (error) {
        console.log(error)
      }
    }
  }

  if (!window.ethereum) return <h1>Please isntall Metamask first</h1>

  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Register />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  )
}

export default App
