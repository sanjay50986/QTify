import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import { fetchTopAlbums } from '../Api/Api';

const Home = () => {

  const [topAlbum, setTopAlbum] = useState([])

  const getTopAlbums = async () => {
    const topAlbumData = await fetchTopAlbums();
    setTopAlbum(topAlbumData);
  }

  useEffect(() => {
    getTopAlbums()
  }, [])

  return (
    <>
    <Navbar/>
    <Hero/>
    <Section title = "Top Albums" data = {topAlbum}/>
    </>
  )
}

export default Home