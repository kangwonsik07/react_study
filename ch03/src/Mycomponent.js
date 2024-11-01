// 1. 컴포넌트 작성시 파일명은 대문자로 시작
// 2. 화살표 함수나 function 함수로 작성
// 3. 함수명은 파일명으로 똑같이 작성(대체적으로 이렇게 많이 사용)
// 4. 외부에서 컴포넌트를 사용하기 위해 마지막에 무조건 export 해준다

import PropTypes from 'prop-types'

// const Mycomponent=({ name = '기본이름', job = '강사', forNumber, children })=>{} 이렇게 받기도 가능
const Mycomponent = (props) => {
   console.log(props)
   /*
    props ={name="하서" job="강사" forNumber={1}, children='맑음'}
  */

   const { name = '기본이름', job = '강사', forNumber, children } = props
   return (
      <div>
         <div>안녕하세요 제이름은 {name}입니다. </div>
         <div>
            제 직업은 {job}입니다. 숫자는 {forNumber}
         </div>
         <div>children 값은 {children}입니다.</div>
      </div>
   )
}
/*
나중에 사라질 방식

Mycomponent.defaultProps = {
   name: '기본이름',
   job: '학생',
}
*/

// 속성값의 타입 검증

Mycomponent.propTypes = {
   name: PropTypes.string,
   forNumber: PropTypes.number.isRequired,
}

export default Mycomponent
