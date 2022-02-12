import React, {useState} from 'react';
import HomePool from '../Components/HomePool';
import Navbar from '../Components/Navbar';

const Pool = () => {
  const [showConnectWallet, setShowConnectWallet] = useState(false);

  return (
  <div className="flex flex-col h-screen">
    <Navbar setShowConnectWallet={setShowConnectWallet} />
    <HomePool />
  </div>
  )
}

export default Pool