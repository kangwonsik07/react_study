import React, { useState } from 'react'

function EventPractice2() {
   // input창이 여러개 일때 대처하는 방법
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   /*
   form = {
      username: '',
      message: '',
      }
   */

   const onChange = (e) => {
      // form state안에 있는 값들을 바꿔줘야 한다
      const nextForm = {
         ...form,
         // 깊은복사
         [e.target.name]: e.target.value,
         // [e.target.name] = username
         // [e.target.name] = message
      }
      setForm(nextForm)
   }

   const onClick = () => {
      // 사용자가 input창에 입력한 state 값을 출력
      alert(`첫번째 입력값: ${username}, 두번째 입력값: ${message}`)

      // form state값의 초기화
      setForm({ username: '', message: '' })
   }

   const onKeyDown = (e) => {
      console.log(e.key)

      // 엔터를 눌렀을때 onClick() 실행
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChange} />

         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChange} onKeyDown={onKeyDown} />

         {/* disabled를 이용해서 첫번쨰 input창과 두번쨰 input창 둘다 입력이 되었을때만 버튼 활성화 */}
         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice2
