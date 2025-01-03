import React, { useState, useMemo, useCallback } from 'react'

function getAverage(numbers) {
   console.log('평균값 계산...')

   // numbers = [1,2,3,....]
   if (numbers.length === 0) return 0
   const sum = numbers.reduce((a, b) => a + b) // 누적합계

   return sum / numbers.length // 평균
}

function UseCallbackex() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   // 컴포넌트가 처음 렌더링 될때만 함수 생성
   const onChange = useCallback((e) => setNumber(e.target.value), [])

   // list state에 입력한 값 추가
   const onInsert = useCallback(() => {
      const nextList = list.concat(Number(number))
      setList(nextList)
      setNumber('')
   }, [number, list]) // number 혹은 list state가 바뀔때만 함수 생성

   // list state가 바뀔때만 getAverage(list)함수가 실행된다
   const avg = useMemo(() => getAverage(list), [list])

   return (
      <>
         <input type="text" value={number} onChange={onChange} />
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <b>평균값: {avg}</b>
         </div>
      </>
   )
}

export default UseCallbackex
