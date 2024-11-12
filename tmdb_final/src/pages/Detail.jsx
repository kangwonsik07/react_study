// 영화 상세 정보 페이지
import '../style/common.css'
import { Wrap, Main } from '../style/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Detail() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">Detail</Main>
         <Footer />
      </Wrap>
   )
}

export default Detail
