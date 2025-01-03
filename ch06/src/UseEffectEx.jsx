import React, { useState, useEffect } from 'react'

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickname, setNickName] = useState('')

   // 1. 컴포넌트가 렌더링 될때마다 실행
   //   useEffect(() => {
   //      console.log('렌더링이 완료되었습니다')
   //      console.log({ name, nickname })
   //   })

   // 2. 맨 처음 렌더링 될때만 실행되고, 업데이트(리렌더링) 될때는 실행되지 않음
   //   useEffect(() => {
   //      console.log('렌더링이 완료되었습니다')
   //      console.log({ name, nickname })
   //       }, [])

   // 3. 특정 값이 변경될때만 호출
   //   useEffect(() => {
   //      console.log('렌더링이 완료되었습니다')
   //      console.log({ name, nickname })
   //   }, [name])

   // 4. 뒷정리 함수
   //   useEffect(() => {
   //      // 렌더링 직후 실행
   //      console.log('렌더링이 완료되었습니다')
   //      console.log({ name, nickname })

   //      // 렌더링 되기 바로 직전에 실행
   //      return () => {
   //         console.log('컴포넌트가 업데이트 되기전..')
   //         console.log({ name, nickname })
   //      }
   //   })

   //    useEffect(() => {
   //       // 렌더링 직후 실행
   //       console.log('렌더링이 완료되었습니다')
   //       console.log({ name, nickname })

   //       // 렌더링 되기 바로 직전에 실행
   //       return () => {
   //          console.log('컴포넌트가 업데이트 되기전..')
   //          console.log({ name, nickname })
   //       }
   //    }, [name])

   useEffect(() => {
      // 렌더링 직후 실행
      console.log('렌더링이 완료되었습니다')
      console.log({ name, nickname })

      // 렌더링 되기 바로 직전에 실행
      return () => {
         console.log('컴포넌트가 업데이트 되기전..')
         console.log({ name, nickname })
      }
   }, [])

   const onChangeName = (e) => setName(e.target.value)
   const onChangeNickName = (e) => setNickName(e.target.value)

   return (
      <div>
         <div>
            <input type="text" placeholder="name" value={name} onChange={onChangeName} />
            <input type="text" placeholder="nickname" value={nickname} onChange={onChangeNickName} />
         </div>
         <div>
            <div>
               <b>이름: </b>
               {name}
            </div>
            <div>
               <b>닉네임:</b>
               {nickname}
            </div>
         </div>
      </div>
   )
}

export default UseEffectEx
