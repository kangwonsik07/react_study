import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice' //counterSlice.reducer(리듀서를 가져옴)
import useSlice from './userSlice'

// reducer store에 저장
const store = configureStore({
   reducer: {
      counter: counterSlice,
      user: useSlice,
   },
})

export default store //store를 내보냄
