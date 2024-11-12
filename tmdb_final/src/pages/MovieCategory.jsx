// 인기영화, 현재 상영중 영화, 개봉 예정 영화 결과를 보여주는 페이지
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/movies/moviesSlice'

import '../style/common.css'
import { Wrap, Main } from '../style/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { Button } from '@mui/material'
import MovieCard from '../components/MovieCard'

function MovieCategory({ category }) {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   // 카테고리 별로 사용할 page 지정
   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })

   // 카테고리가 변경될때 마다 해당 카테고리의 페이지를 1로 초기화
   useEffect(() => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: 1,
      }))
   }, [category])

   // page가 변할때 마다 영화 데이터 로딩
   // category: category 에서 뒤 카테고리는 function MovieCategory({ category })의 category다
   useEffect(() => {
      console.log({ category, page: page[category] })
      dispatch(
         fetchMovies({
            category: category,
            page: page[category],
         })
      )
   }, [dispatch, page])

   // 더보기를 누르면 해당 카테고리의 page state를 1씩 증가
   // loadMore()실행 -> page state가 변경 -> useEffect 실행
   const loadMore = useCallback(() => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: prevPage[category] + 1, // 1페이지씩 증가
      }))
   }, [category])

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            {/* 영화목록 데이터를 movies props로 전달 */}
            <MovieCard movies={movies} />
            <Button variant="outlined" sx={{ margin: '20px auto', display: 'block', width: '500px' }} onClick={loadMore}>
               더보기
            </Button>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
