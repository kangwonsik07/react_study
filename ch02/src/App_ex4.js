function App() {
   // 3. ||연산 (A || B) -> A가 ture면 A를 렌더링, A가 false면 B를 렌더링
   const name = undefined

   return <div>{name || '리액트'}</div>
}

// 컴포넌트를 외부에서 사용 할 수 있도록 지정
export default App
