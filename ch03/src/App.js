// import export해주는 걸 어떤 이름으로 사용할건지(export이름과 똑같이 사용하길 권장) from 파일경로
// import Mycomponent from './Mycomponent'
// import Type from './Type'
// import Say from './Say'
import InputText from './InputText'

function App() {
   // return (
   //    <Mycomponent name="하서" job="강사" forNumber={1}>
   //       맑음
   //    </Mycomponent>
   // )

   // const func = (a, b) => {
   //    return a + b
   // }
   // return <Type str="react" num={200} bool={1 == 1} arr={[0, 1, 2]} json={{ react: '리액트', time: 2 }} func={func} />

   // return <Say />

   return <InputText />
}

export default App
