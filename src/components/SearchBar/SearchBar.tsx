import styles from './SearchBar.module.scss'
import { axiosInstance } from 'shared/api'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { movieListAtom } from '../../store/Atom'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [movieList, setMovieList] = useRecoilState(movieListAtom) // useState랑 사용법 같음

  const searchInput = (e: any) => {
    setSearch(e.currentTarget.value)
  }

  const getSearch = () => {
    axiosInstance
      .post(`/?apikey=92e32667&s=${search}&page={2}`)
      .then((res: any) => {
        if (res.data.Response === 'False') {
          alert('검색어를 입력해주세요')
        } else {
          setMovieList(res.data.Search)
        }
      })
      .catch((err: any) => {})
  }

  return (
    <div className={styles.searchBarWrap}>
      <input className={styles.searchBar} type='text' onChange={searchInput} />
      <button type='button' className={styles.searchButton} onClick={getSearch}>
        <span role='button' tabIndex={0}>
          검색
        </span>
      </button>
    </div>
  )
}

export default SearchBar
