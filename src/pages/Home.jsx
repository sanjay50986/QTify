import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from '../components/Hero/Hero';
import TopAlbum from '../components/Album/Section';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <TopAlbum/>
    </>
  )
}

export default Home