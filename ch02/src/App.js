function App() {
   // 6. 닫는 태그가 반드시 있어야 한다.

   return (
      <>
         <input type="text"></input>
         <input type="text" />
         {/* <input type='text'> 닫는 태그가 없어서 사용할 수 없다 */}
      </>
   )
}

// 컴포넌트를 외부에서 사용 할 수 있도록 지정
export default App
