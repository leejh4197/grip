import styles from './Main.module.scss'
import SearchBar from 'components/SearchBar/SearchBar'
import FooterBtn from 'components/FooterBtn/FooterBtn'
import MovieList from 'components/MovieList/MovieList'

const Main = () => {
  return (
    <div className={styles.mainWrap}>
      <SearchBar />
      <MovieList />
      <FooterBtn />
    </div>
  )
}

export default Main
