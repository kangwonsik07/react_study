import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTVs } from '../../api/tmdbApi'

// tv목록을 API로부터 가져옴(1페이지만)

export const fetchTVs = createAsyncThunk('tv/fetchTVs', async (type) => {
   const response = await getTVs(type)
   console.log('response.data.results:', response.data.results)
   console.log('type:', type)
   console.log('response:', response)
   console.log('response.data:', response.data)
   return response.data.results
})

const tvsSlice = createSlice({
   name: 'tvs',
   initialState: {
      loading: false,
      tvs: [],
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      console.log('extraReducers:fetchTVs:', fetchTVs)
      console.log('extraReducers:builder:', builder)

      builder
         // 대기상태
         .addCase(fetchTVs.pending, (state) => {
            state.loading = true
            state.error = null // 새로운 요청 시 에러 초기화
            console.log('builder:', builder)
         })
         // 성공상태
         .addCase(fetchTVs.fulfilled, (state, action) => {
            state.loading = false
            state.tvs = action.payload
            console.log('builder:', builder)
         })
         // 실패상태(에러발생)
         .addCase(fetchTVs.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
            console.log('builder:', builder)
         })
   },
})

export default tvsSlice.reducer
