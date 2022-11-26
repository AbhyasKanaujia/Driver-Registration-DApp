import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

const ProfilePicture = ({ account, size }) => {
  return <Jazzicon diameter={size || 100} seed={jsNumberForAddress(account)} />
}

export default ProfilePicture
