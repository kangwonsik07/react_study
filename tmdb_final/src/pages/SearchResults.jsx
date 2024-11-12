// 검색 결과 화면
import '../style/common.css'
import { Wrap, Main } from '../style/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function SearchResults() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">Search</Main>
         <Footer />
      </Wrap>
   )
}

export default SearchResults
