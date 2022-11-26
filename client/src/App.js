import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { contractAddress } from './constants'
import DriverRegistration from './contracts/DriverRegistration.json'

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
    <div>
      <h1>Your Account: {account}</h1>
      <button onClick={connect}>Connect</button>
    </div>
  )
}

export default App
