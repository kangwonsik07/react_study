import React, { useReducer } from 'react'

function ReducerCounter2() {
   // [state 값, dispath] = (reducer, state 초기값)
   const [count, countDispath] = useReducer(countReducer, 0)

   // reducer함수: 직접 state를 변경한다(회계직원 역활)
   function countReducer(oldCount, action) {
      // (현재 state, dispath에 전달받은 action)
      if (action === 'UP') {
         return oldCount + 1 // return 실행시 state가 업데이트
      } else if (action === 'DOWN') {
         return oldCount - 1
      } else if (action === 'RESET') {
         return 0
      }
   }

   // dispath 함수: 이벤트가 발생하면 action을 reducer함수를 실행시키고 action을 전달

   const down = () => countDispath('DOWN')
   const reset = () => countDispath('RESET')
   const up = () => countDispath('UP')

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter2
