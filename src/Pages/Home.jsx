import React from 'react'
import ConnectWalletModal from '../Components/Modals/ConnectWalletModal';
import ImportToken from '../Components/Modals/ImportToken';
import ManageList from '../Components/Modals/ManageList';
import SelectToken from '../Components/Modals/SelectToken';
import Navbar from '../Components/Navbar'
import Swap from '../Components/Swap';

function Home() {
  return (
  <div>
    <Navbar />
    <Swap />
    {/* <ConnectWalletModal /> */}
    {/* <SelectToken /> */}
    {/* <ImportToken /> */}
    <ManageList />
  </div>
  )
}

export default Home;
