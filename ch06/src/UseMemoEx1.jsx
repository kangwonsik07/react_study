import React, { useState } from 'react'

function getAverage(numbers) {
   console.log('평균값 계산...')

   // numbers = [1,2,3,....]
   if (numbers.length === 0) return 0
   const sum = numbers.reduce((a, b) => a + b) // 누적합계

   return sum / numbers.length // 평균
}

function UseMemoEx1() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   const onChange = (e) => setNumber(e.target.value)

   // list state에 입력한 값 추가
   const onInsert = () => {
      const nextList = list.concat(Number(number))
      setList(nextList)
      setNumber('')
   }
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
            <b>평균값: {getAverage(list)}</b>
         </div>
      </>
   )
}

export default UseMemoEx1
