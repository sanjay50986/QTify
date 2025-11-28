import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import { fetchNewAlbums, fetchTopAlbums } from '../Api/Api';

const Home = () => {

  const [topAlbum, setTopAlbum] = useState([])
  const [newAlbum, setNewAlbum] = useState([])

  const getTopAlbums = async () => {
    const topAlbumData = await fetchTopAlbums();
    setTopAlbum(topAlbumData);
  }

  const getNewAlbums = async () => {
    const newAlbumData = await fetchNewAlbums();
    setNewAlbum(newAlbumData);
  }


  useEffect(() => {
    getTopAlbums()
    getNewAlbums()
  }, [])

  return (
    <>
    <Navbar/>
    <Hero/>
    <Section id = "top" title = "Top Albums" data = {topAlbum}/>
    <Section id = "new" title = "New Albums" data = {newAlbum}/>
    </>
  )
}

export default Home