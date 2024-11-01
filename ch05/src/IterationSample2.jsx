function IterationSample2() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name, index) => <li key={index}>{name}</li>)

   /*
    nameList=[<li key='0'>눈사람</li>,<li key='1'>얼음</li>,<li key='2'>눈</li>,<li key='3'>바람</li>]
    */

   return <ul>{nameList} </ul>
}

export default IterationSample2
