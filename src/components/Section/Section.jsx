import React, { useEffect, useState } from 'react'
import "./Section.css";
import Card from "../Card/Card"
import Carousel from '../Carousel/Carousel';
import { fetchGenre } from '../../Api/Api';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Section = ({title, data, id}) => {

  const [toggle, setToggle] = useState(true)
  const [tabValue, setTabValue] = useState("all")
  const [genre, setGenre] = useState([])
  const [songsFilterData, setSongsFilterData] = useState([])

  const getGenera = async () => {
    let getGenre = await fetchGenre()
    setGenre(getGenre.data)
  }


  function handleToggle() {
    setToggle(!toggle)
  }

  const handleChange = (event, tabValue) => {
    setTabValue(tabValue);
  };

 
  useEffect(() => {
    getGenera()
  }, [])
  
  return (
    <div className='section-container'>
        <div className='section-header'>
            <h2>{title}</h2>
            { id !== "songs" && ( <button onClick={handleToggle}>
                {toggle ? "Show all" : "Collapse"}
            </button>)}
        </div>
                
       {id === "songs" && (
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            className="spotify-tabs"
            textColor="text"
            indicatorColor='primary'
          >
            <Tab 
              key= "all" 
              label= "All" 
              value="all"
              sx={{ color: "white" }}  
            />
          {genre.map((g) => (
            <Tab 
              key= {g.key} 
              label= {g.label} 
              value={g.key}  />
          ))}
          </Tabs>
        </Box>
        )}



        {toggle ? (
          <Carousel tabValue = {tabValue}  data = {data} id = {id}/>
        ) : (
          <div className='card-layout'>
            {data.map((album) => (
            <Card
              key={album?.id}
              follows = {album?.follows}
              image = {album?.image}
              title = {album?.title}
            />
        ))}
        </div>
        )}
    </div>
  )
}

export default Section