import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { HouseContext } from '../components/HouseContext'

import Banner from '../components/Banner'
import HouseList from '../components/HouseList'

import { ImSpinner2 } from 'react-icons/im'

const Home = () => {
  const { houses, loading } = useContext(HouseContext)

 console.log(houses)

  return (
    <div className='min-h-[80vh]'>
      <Banner />
      <HouseList />
    </div>
  )
};

export default Home;
