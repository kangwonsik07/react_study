import React, { useState } from 'react'

function IterationSample5() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])
   const [inputText, setInputText] = useState('')
   const [nextid, setNextId] = useState(5)

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)

   const onChange = (e) => setInputText(e.target.value)

   const onClick = () => {
      const nextNames = names.concat({
         id: nextid, //id를 만들어주는 state id: 5
         text: inputText, //사용자가 입력한 값
      })
      setNames(nextNames) //names state를 합친 배열로 변경
      setNextId(nextid + 1) //다음에 데이터 추가시 nextid를 1씩 증가시키기 위해
      setInputText('') //input창에서 사용하는 state값 초기화
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList} </ul>
      </>
   )
}

export default IterationSample5
