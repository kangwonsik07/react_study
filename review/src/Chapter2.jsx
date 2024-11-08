function Chapter2() {
   const name = '하서'
   const style = {
      backgoroundColor: 'red',
      fontSize: '48px',
   }
   return (
      <div>
         <h1>리액트</h1>
         <h1>{name}</h1>
         {name === '하서' ? <p>하서입니다</p> : <p>하서가 아닙니다</p>}
         <p>{'리액트' && <h1>리액트 입니다</h1>}</p>
         <p>{'리액트' || <h1>리액트 입니다</h1>}</p>
         <p style={style}>안녕하세요</p>
         <p
            style={{
               backgoroundColor: 'red',
               fontSize: '48px',
            }}
         >
            안녕하세요
         </p>
         <input />
         <input></input>
      </div>
   )
}

export default Chapter2
