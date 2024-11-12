// 영화 슬라이더
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../features/movies/moviesSlice'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import '../css/PosterSlider.css'

// import required modules
import { Navigation } from 'swiper/modules'

function PosterSlider() {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovies({ category: 'now_playing', page: 1 }))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error...{error}</p>

   return (
      <>
         <Swiper slidesPerView={5} spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
            {movies.map((movie) => (
               <SwiperSlide key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}

export default PosterSlider
