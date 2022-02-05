import settingIcon from '../assets/images/setting.svg'
import euthereumIcon from '../assets/images/euthereum.svg'
import arrowDownIcon from '../assets/images/arrow-down.svg'
import bnbIcon from '../assets/images/bnb.svg'
import exchangeIcon from '../assets/images/exchange-icon.svg'

function Swap() {
  return (
    <div className='w-11/12 max-w-[586px] bg-[#F8F8F9] mx-auto p-6 mt-16 relative'>
      <div className="flex items-center justify-between">
        <h3>Swap</h3>
        <img src={settingIcon} alt="setting icon" className="cursor-pointer" />
      </div>
      <div className="p-4 bg-white rounded-md mt-4">
        <div className="flex items-center justify-between">
          <h3 className='text-[#636A7E] font-medium'>From</h3>
          <p className='font-semibold text-sm mr-4'>Use Max</p>
        </div>
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-[#AFB4C0] text-2xl">0</h1>
            <p className="text-[#AFB4C0]">Balance 0.00</p>
          </div>
          <div className="flex space-x-1 items-center">
            <img src={euthereumIcon} alt="ethereum" />
            <p>ETH</p>
            <img src={arrowDownIcon} alt="arrow down" className='cursor-pointer' />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center relative top-[-10px]">
        <img src={exchangeIcon} alt="" className="cursor-pointer" />
      </div>
      <div className="p-4 bg-white rounded-md mt-[-25px]">
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-[#AFB4C0] text-2xl">0</h1>
            <p className="text-[#AFB4C0]">Balance 0.00</p>
          </div>
          <div className="flex space-x-1 items-center">
            <img src={bnbIcon} alt="ethereum" />
            <p className="uppercase">BNB</p>
            <img src={arrowDownIcon} alt="arrow down" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className='font-[16px] text-[#636A7E]'>Slippage Tolerance</p>
        <p className="font-[18px] text-[#090A0B]">1%</p>
      </div>
      <button className="capitalize w-full h-[52px] font-[16px] text-[#DDDFE4] bg-[#F4F4F6] mt-3">Enter A Amount</button>
    </div>
  );
}

export default Swap;
