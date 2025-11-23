import axios from 'axios'
import Card from '../Card/Card'
import "./Section.css"
import { useEffect, useState } from 'react'

const TopAlbum = () => {


   const [AlbumData, setAlbumData] = useState([])

  const fetchAlbumData = async () => {
   try {
      const res = await axios.get("https://qtify-backend.labs.crio.do/albums/top");
      setAlbumData(res.data)
    } catch (error) {
      console.error("Error fetching album data:", error.message);
      return null; 
    }
  }

  useEffect(() => {
    fetchAlbumData()
  }, [])

  return (
    <section className='album'>
      <div className='header-title'>
        <h3>Top Albums</h3>
        <button>Collapse</button>
      </div>
       <div className='card-container'>
        {AlbumData.map((album) => (
          <Card key={album.id} albumData = {album} />
       ))
        }
       </div>
    </section>
  )
}

export default TopAlbum