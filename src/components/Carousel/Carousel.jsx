import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "../Card/Card";
import leftIcon from "../../assets/Icons/left-icon.svg"
import RightIcon from "../../assets/Icons/right-icon.svg"

import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({data, id, tabValue}) => {

  return (
   <div style={{ position: "relative", padding: "10px 0" }}>

      <button className={`custom-prev-${id}`} style={leftBtn}>
        <img style={{background: "none"}} src={leftIcon} alt="prev" />
      </button>

      <button className={`custom-next-${id}`} style={rightBtn}>
        <img  style={{background: "none"}} src={RightIcon} alt="next" />
      </button>

    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      modules={[Navigation]}
      navigation= {{
          nextEl: `.custom-next-${id}`,
          prevEl: `.custom-prev-${id}`,   
      }}
      breakpoints={{
          320: { slidesPerView: 1 },  
          480: { slidesPerView: 2 },  
          640: { slidesPerView: 3 },   
          768: { slidesPerView: 4 },   
          1024: { slidesPerView: 5 },  
          1280: { slidesPerView: 6 },  
          1536: { slidesPerView: 7 },  
        }}
    >
      {id !== "songs" || tabValue === "all" ? (
        data.map((album) => (
          <SwiperSlide>
            <Card
              key={album?.id}
              follows = {album?.follows}
              image = {album?.image}
              title = {album?.title}
              likes={album?.likes}
              songsData = {album}
            />
          </SwiperSlide>
      ))
      ) : (
        data
        .filter((song) => song.genre?.key === tabValue)
        .map((song) => (
          <SwiperSlide key={song?.id}>
            <Card
              image={song?.image}
              title={song?.title}
              likes={song?.likes}
              songsData = {song}
            />
          </SwiperSlide>
        ))
      )}
      
    </Swiper>
   </div>
  )
}

const leftBtn = {
  position: "absolute",
  left: "-20px",
  top: "45%",
  transform: "translateY(-50%)",
  zIndex: 10,
  cursor: "pointer",
  background: "none",
  border: "none"
  
};

const rightBtn = {
  position: "absolute",
  right: "-20px",
  top: "45%",
  transform: "translateY(-50%)",
  zIndex: 10,
  cursor: "pointer",
  background: "none",
  border: "none"
};

export default Carousel