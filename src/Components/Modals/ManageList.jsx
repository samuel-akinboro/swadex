import React from "react";
import euthereumIcon from "../../assets/images/euthereum.svg";
import closeIcon from "../../assets/images/close.svg";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';

const black = {
  500: '#000000',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
};

const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #F5FA80;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: #F5FA80;
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #F5FA80;
    }

    .${switchUnstyledClasses.track} {
      background: ${black[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

const ManageList = () => {
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };
  
  return (
    <div className="w-screen h-screen absolute inset-0 bg-[#50505099] flex items-center justify-center">
      <div className="py-6 px-4 bg-[#D9D9DA] w-11/12 max-w-[364px] rounded-md">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-md text-[#090A0B] font-semibold flex items-center gap-2">
            <ArrowBackOutlinedIcon fontSize="small" className="cursor-pointer" />
            Manage
          </h3>
          <img src={closeIcon} alt="" className="cursor-pointer" />
        </div>
        <div className="flex items-center bg-white rounded-md mb-3">
          <button className="flex-1 py-3 px-6 rounded-md font-medium bg-black text-[#F5FA80]">Lists</button>
          <button className="flex-1 py-3 px-6 rounded-md font-medium">Tokens</button>
        </div>
        <input type="text" placeholder="http:// or ipfs:// or ENS name" className="w-full p-3 mb-2 rounded-md outline-0 text-sm"/>
        <div>
          <div className="cursor-pointer p-2 mt-2 rounded-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img src={euthereumIcon} alt="" />
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">ETH</h6>
              </div>
            </div>
            <div>
              <SwitchUnstyled component={Root} {...label} />
            </div>
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img src={euthereumIcon} alt="" />
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">ETH</h6>
              </div>
            </div>
            <div>
              <SwitchUnstyled component={Root} {...label} />
            </div>
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img src={euthereumIcon} alt="" />
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">ETH</h6>
              </div>
            </div>
            <div>
              <SwitchUnstyled component={Root} {...label} />
            </div>
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img src={euthereumIcon} alt="" />
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">ETH</h6>
              </div>
            </div>
            <div>
              <SwitchUnstyled component={Root} {...label} />
            </div>
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img src={euthereumIcon} alt="" />
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">ETH</h6>
              </div>
            </div>
            <div>
              <SwitchUnstyled component={Root} {...label} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageList;
