import React from 'react';
import closeIcon from '../../assets/images/close.svg'
import cryptoolyIcon from '../../assets/images/icon-wrapper.svg'

function ConnectWalletModal() {
  return (
    <div className='w-screen h-screen absolute inset-0 bg-[#50505099] flex items-center justify-center'>
      <div className="p-4 bg-[#F8F8F9B2] w-11/12">
        <div className='flex items-center justify-between mb-3'>
          <h3 className="text-lg text-[#090A0B]">Connect to a wallet</h3>
          <img src={closeIcon} alt="" />
        </div>
        <div>
          <div className='p-2 rounded-md border-[1px] border-black bg-white flex items-center justify-between'>
            <h6>Cryptooly</h6>
            <img src={cryptoolyIcon} alt="" />
          </div>
          <div className='p-2 mt-2 rounded-md border-[1px] border-black bg-white flex items-center justify-between'>
            <h6>Cryptooly</h6>
            <img src={cryptoolyIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
    );
}

export default ConnectWalletModal;
