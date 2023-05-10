import React, { useState, useEffect, useContext} from 'react';

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';


import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {value: 'Price range (any)'},
    {value: '100000 - 130000'},
    {value: '130000 - 160000'},
    {value: '160000 - 190000'},
    {value: '220000 - 250000'},
    {value: '280000 - 310000'},
    {value: '310000 - 340000'}
  ]


  return (
    <div className='dropdown relative'>
      <button className='dropdown-btn w-full text-left'
        onClick={() => setIsOpen(!isOpen)}>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {price}
          </div>
          <div className='text-[13px]'>Select your price</div>
        </div>
        { isOpen ? (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          )
        }
      </button>
      { isOpen ? (
        <ul className='dropdown-menu'>
          {prices.map((price, index) => {
            return (
              <li key={index}
                onClick={() => { 
                  setIsOpen(!isOpen)
                  return setPrice(price.value); 
                  }}
                className='cursor-pointer hover:text-violet-700 transition'>
                  {price.value}
              </li>
            )
          })}
        </ul>
      ) : '' }
      
      
    </div>
  )
};

export default PriceRangeDropdown;
