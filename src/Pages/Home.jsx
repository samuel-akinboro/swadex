import ConnectWalletModal from '../Components/Modals/ConnectWalletModal';
import Navbar from '../Components/Navbar'
import Swap from '../Components/Swap';

function Home() {
  return (
  <div>
    <Navbar />
    <Swap />
    <ConnectWalletModal />
  </div>
  )
}

export default Home;
