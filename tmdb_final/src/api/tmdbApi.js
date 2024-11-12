import axios from 'axios'

// TMDB API 가본 URL과 API 키 설정

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjVhNzIwYzZkODU1YTUzOGU5MzA0MjZmMTY1ZjYyMCIsIm5iZiI6MTczMTI4Njc4NC4yNDYzNywic3ViIjoiNjcxYWU3NzliM2Q1Y2JiODQyZjNmN2NlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.TeIvb21tXUldpibitBpXmLs2LZkiYXFJy9zOFNdEsBI'

// api call을 준비하기 위한 axios 객체 생성
const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json', // json 형태로 response 데이터를 받겠다
      Authorization: AUTH_KEY, // 서버에 request할때 필요한 인증키
   },
})

// 공통 API 호출 함수
const fetchFromApi = async (url, params = {}) => {
   try {
      const response = await tmdbApi.get(url, { params })
      return response
   } catch (error) {
      console.error(`API요청 오류:${error.message}`)
      throw error
   }
}

// 인기, 상영중, 개봉예정 가져오기
export const getMovies = (category = 'popular', page = 1) => {
   // 카테고리에 맞는 endpoint를 가져옴
   const endpoint = {
      popular: '/movie/popular',
      now_playing: '/movie/now_playing',
      upcoming: '/movie/upcoming',
   }[category]

   return fetchFromApi(endpoint, {
      language: 'ko-KR',
      page, // page: page, 페이지가 계속 바뀌므로 매개변수로 page를 받아온다
      region: 'KR',
   })
}

// 인기, 방송 중인 tv 목록 가져오기
export const getTVs = (type, page = 1) => {
   const endpoint = {
      popular: '/tv/popular',
      on_the_air: '/tv/on_the_air',
   }[type]

   return fetchFromApi(endpoint, {
      language: 'ko-KR',
      page,
      region: 'KR',
   })
}

// 영화 상세 정보 가져오기
export const getMoviesDetails = (movieId) => {
   return fetchFromApi(`/movie/${movieId}`, { language: 'ko-KR' })
}

// 출연 배우 정보 가져오기
export const getMoviesCredits = (movieId) => {
   return fetchFromApi(`/movie/${movieId}/credits`, { language: 'ko-KR' })
}

// 영화 검색 API 호출
export const searchMovie = (query, page = 1) => {
   return fetchFromApi('/search/movie', {
      query, // 검색어
      include_adult: false, // 성인 영화 제외
      language: 'ko-KR',
      page, // page: page, 페이지가 계속 바뀌므로 매개변수로 page를 받아온다
      region: 'KR',
   })
}

export default tmdbApi
