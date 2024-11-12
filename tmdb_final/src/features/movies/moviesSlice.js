import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../../api/tmdbApi'
// import { act } from 'react'

/*
createAsyncThunk의 async함수에서 매개변수로 값을 여러개 받으려면 객체 혹은 배열로 받아야 한다
 */

// 인기, 현재 상영중, 개봉예정 영화 목록을 API로 부터 가져옴
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ category, page }) => {
   const response = await getMovies(category, page)
   return response.data.results
})

const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      loading: false, // 로딩 여부
      movies: [], // 영화 정보
      movieDetails: null, // 영화 상세 정보
      movieCredits: null, // 출연 배우 정보
      error: null, // 에러 메세지
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         // 대기상태
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null // 새로운 요청 시 에러 초기화
         })
         // 성공상태
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            // page가 1일때 새로운 데이터로 state 업데이트
            if (action.meta.arg.page === 1) {
               state.movies = action.payload
            } else {
               // page가 2 이상일때 기존데이터 + 새로운 데이터로 state 업데이트
               state.movies = [...state.movies, ...action.payload]
            }
         })
         // 실패상태(에러발생)
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default moviesSlice.reducer
