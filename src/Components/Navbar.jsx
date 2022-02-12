import {NavLink} from 'react-router-dom'

function Navbar({setShowConnectWallet}) {
  return (
    <div className="bg-[#F8F8F9]">
      <div className="container h-[80px] mx-auto px-12 flex items-center">
        <div className="flex-1 flex space-x-4 items-center h-full">
          <span className="text-[#8cc4fc] bg-clip-text text-transparent mr-8 text-2xl font-semibold bg-gradient-to-br from-[#000000] via-[#000000] to-[#F5FA80]">SWADEX</span>
          <NavLink to="/" className="font-medium h-full px-4 border-b-black border-b-2 flex items-center">Swap</NavLink>
          <NavLink to="/" className="font-medium h-full px-4 flex items-center">Pool</NavLink>
          <NavLink to="/" className="font-medium h-full px-4 flex items-center">Vote</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <span className="h-[40px] bg-[#D7E4E3] w-[74px] flex items-center justify-center rounded-md font-medium">0 SAP</span>
          <button 
            className="bg-black h-[40px] px-8 text-[#F5FA80] rounded-md"
            onClick={()=> setShowConnectWallet(true)}
          >
            Connect to Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
