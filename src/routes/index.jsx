import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'
import Favorite from 'pages/Favorite/Favorite'
import FooterBtn from 'components/FooterBtn/FooterBtn'
import MovieList from 'components/MovieList/MovieList'
import SearchBar from 'components/SearchBar/SearchBar'
import Main from 'pages/Main/Main'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='favorite' element={<Favorite />} />
        </Routes>
        <FooterBtn />
      </div>
    </div>
  )
}

export default App
