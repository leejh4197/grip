import styles from './MovieList.module.scss'
import List from '../List/List'

const MovieList = () => {
  return (
    <div className={styles.movieListWrap}>
      <div className={styles.movieList}>
        <List />
      </div>
    </div>
  )
}

export default MovieList
