import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import  BackBtn from "../assets/Icons/back-btn.png"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import "./Songs.css"

const Songs = () => {
  const location = useLocation();
  const album = location.state?.album;
  const navigate = useNavigate()

  console.log(album);
  
  return (
    <main className='container-songs'>
      <img onClick={() => navigate(-1)} className='back-btn' src={BackBtn} alt="backBtn" />
      <div className='song-header'>
        <img className='banner' src={album.image}alt="" />
        <div>
          <h1 className='album-title'>{album.title}</h1>
          <p className='album-description'>{album.description}</p>
          <p className='album-releaseDate'>2022</p>
          <ul className='album-details '>
            <li style={{listStyle: "none"}}>{album?.songs?.length} Songs</li>
            <li>{album.follows} Follows</li>
          </ul>

          <div className='action-btn'>
            <button className='shuffle-btn'>
            <ShuffleIcon style={{background: "none"}}/> Shuffle
            </button>
            <button className='libraray-btn'>
               Add to library
            </button>
          </div>
        </div>
      </div>

      <div className="songs-table-wrapper">
        <table className='songs-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th style={{textAlign: "center", width: "33%"}}>Artist</th>
            <th style={{textAlign: "right", width: "33%"}}>Duration</th>
          </tr>
        </thead>

        <tbody>
          {album?.songs?.map((song, index) => (
            <tr key={index}>
              <td style={{display: "flex", alignItems: "center", gap: "20px", padding: "14px 0"}}>
                <img src={song?.image} alt= {song.title} width={59} height={64} />
                <h5>{song.title}</h5>
              </td>
              <td style={{textAlign: "center"}}>{song.artists[0]}</td>
              <td style={{ textAlign: "right" }}>
                {Math.floor(song.durationInMs / 60000)}:
                {(Math.floor((song.durationInMs % 60000) / 1000)).toString().padStart(2, "0")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </main>
  )
}

export default Songs