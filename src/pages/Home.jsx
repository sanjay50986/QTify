import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from '../Api/Api';

const Home = () => {

  const [topAlbum, setTopAlbum] = useState([])
  const [newAlbum, setNewAlbum] = useState([])
  const [songsData, setSongsData] = useState([])

  const getTopAlbums = async () => {
    const topAlbumData = await fetchTopAlbums();
    setTopAlbum(topAlbumData);
  }

  const getNewAlbums = async () => {
    const newAlbumData = await fetchNewAlbums();
    setNewAlbum(newAlbumData);
  }

  const getSongsData= async () => {
    const songsData = await fetchSongs();
    setSongsData(songsData);
  }
  
  useEffect(() => {
    getTopAlbums()
    getNewAlbums()
    getSongsData()
  }, [])

  return (
    <>
    <Navbar/>
    <Hero/>
    <Section id = "top" title = "Top Albums" data = {topAlbum}/>
    <Section id = "new" title = "New Albums" data = {newAlbum}/>
    <hr style={{border: "1px solid rgba(52, 201, 75, 1)"}} />
    <Section id = "songs" title = "Songs" data = {songsData}/>
    </>
  )
}

export default Home