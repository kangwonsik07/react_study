// 영화 상세 정보 페이지
import { useParams } from 'react-router-dom'
import '../style/common.css'
import { Wrap, Main } from '../style/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieDetail from '../components/MovieDetail'
import CreditSlider from '../components/slider/CreditSlider'

function Detail() {
   const { movieId } = useParams()
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieDetail />
            <CreditSlider movieId={movieId} />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Detail
