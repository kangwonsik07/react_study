import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
   name: 'counterSlice', //slice의 이름 지정
   initialState: { value: 0 }, //state의 초기값
   reducers: {
      // reducer
      up: (state, action) => {
         console.log('action:' + action)
         state.value += action.payload //2
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default CounterSlice.reducer // 리듀서를 내보냄

export const { up, down } = CounterSlice.actions //reducers 안에 정의한 up, down함수를 내보냄
