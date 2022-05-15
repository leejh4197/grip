import { atom } from 'recoil'
import { Movie } from 'types/movid'

// movielist를 atom으로 만들어서 searchbar에서 검색할때마다 이 값을 업데이트
export const movieListAtom = atom<Movie[]>({
  key: 'movieList',
  default: [],
})
