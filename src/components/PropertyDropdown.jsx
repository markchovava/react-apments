import React, { useState, useEffect, useContext} from 'react';

import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';


// import { Menu } from '@headlessui/react'

import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='dropdown relative'>
      <button className='dropdown-btn w-full text-left'
        onClick={() => setIsOpen(!isOpen)}>
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select your property</div>
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
          {properties.map((property, index) => {
            return (
              <li key={index} 
                onClick={() => { 
                  setIsOpen(!isOpen)
                  return setProperty(property); 
                  }}
                className='cursor-pointer hover:text-violet-700 transition'>
                  {property}
              </li>
            )
          })}
        </ul>
      ) : '' }
      
      
    </div>
  )
};

export default PropertyDropdown;
