// 영화 슬라이더
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTVs } from '../../features/tvs/tvsSlice'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import '../css/PosterSlider.css'

// import required modules
import { Navigation } from 'swiper/modules'

function TvSlider() {
   const dispatch = useDispatch()
   const { tvs, loading, error } = useSelector((state) => state.tvs)

   useEffect(() => {
      dispatch(fetchTVs('on_the_air'))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error...{error}</p>

   return (
      <>
         <Swiper slidesPerView={5} spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
            {tvs.map((tv) => (
               <SwiperSlide key={tv.id}>
                  <img src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`} alt={tv.title} />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}

export default TvSlider
