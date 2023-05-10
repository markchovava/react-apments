import React, { useState, useEffect, useContext} from 'react';

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';


// import { Menu } from '@headlessui/react'

import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='dropdown relative'>
      <button className='dropdown-btn w-full text-left'
        onClick={() => setIsOpen(!isOpen)}>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>Select your place</div>
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
          {countries.map((country, index) => {
            return (
              <li key={index} 
                onClick={() => { 
                  setIsOpen(!isOpen)
                  return setCountry(country); 
                  }}
                className='cursor-pointer hover:text-violet-700 transition'>
                {country}
              </li>
            )
          })}
        </ul>
      ) : '' }
      
      
    </div>
  )
  
};

export default CountryDropdown;
