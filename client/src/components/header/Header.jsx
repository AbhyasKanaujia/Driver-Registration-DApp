import { Container } from 'react-grid-system'
import { Link } from 'react-router-dom'
import ProfilePicture from '../profilePicture/ProfilePicture'

import './header.css'

const Header = ({ account, setAccount }) => {
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
  return (
    <nav className="nav">
      <Container className="nav__container">
        <Link to="/" className="nav__brand">
          Driver Registration
        </Link>
        <div className="nav__menu">
          <Link to="/" className="nav__menu-item">
            Home
          </Link>
          <Link to="/register" className="nav__menu-item">
            Register
          </Link>
          <Link to="/status" className="nav__menu-item">
            Status
          </Link>
        </div>
        <div className="nav__others">
          {account ? (
            <div className="nav__profile" title={account}>
              <ProfilePicture
                account={account}
                size="30"
                className="nav__profile-icon"
              />
              <div className="nav__profile-id">{`${account.slice(
                0,
                4
              )}...${account.slice(-3)}`}</div>
            </div>
          ) : (
            <button className="btn btn--primary" onClick={connect}>
              Connect
            </button>
          )}
        </div>
      </Container>
    </nav>
  )
}

export default Header
