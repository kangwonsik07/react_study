import React, { useState } from 'react'

function IterationSample6() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])
   const [inputText, setInputText] = useState('')
   const [nextid, setNextId] = useState(5)

   const nameList = names.map((name) => (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
         {name.text}
      </li>
   ))

   const onRemove = (id) => {
      // 만약 id=3 일때 id=3이외의 배열은 name.id와 id가 같지 않기 때문에 참 -> filter를 거치면서 name.id와 id=3인것만 빠진다
      const nextNames = names.filter((name) => {
         return name.id !== id
      })
      setNames(nextNames)
   }

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

export default IterationSample6
