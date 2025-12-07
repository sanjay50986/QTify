import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import { fetchFaq, fetchNewAlbums, fetchSongs, fetchTopAlbums } from '../Api/Api';
import FAQ from '../components/FAQ/FAQ';
import Feedback from '../components/Feedback/Feedback';

const Home = () => {

  const [topAlbum, setTopAlbum] = useState([])
  const [newAlbum, setNewAlbum] = useState([])
  const [songsData, setSongsData] = useState([])
  const [faq, setFaq] = useState([])
  const [showFeedback, setShowFeedback] = useState(false)

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

  const getFAQ= async () => {
    const faq = await fetchFaq();
    setFaq(faq.data);
  } 
  
  useEffect(() => {
    getTopAlbums()
    getNewAlbums()
    getSongsData()
    getFAQ()
  }, [])

  return (
    <>
    <Navbar onFeedbackClick={() => setShowFeedback(true)}/>
    <Hero/>
    <Section id = "top" title = "Top Albums" data = {topAlbum}/>
    <Section id = "new" title = "New Albums" data = {newAlbum}/>
    <hr style={{border: "1px solid rgba(52, 201, 75, 1)"}} />
    <Section id = "songs" title = "Songs" data = {songsData}/>
    <hr style={{border: "1px solid rgba(52, 201, 75, 1)"}} />
    <FAQ faq = {faq}/>
   
    </>
  )
}

export default Home