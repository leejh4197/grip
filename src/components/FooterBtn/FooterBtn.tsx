import styles from './FooterBtn.module.scss'
import { useNavigate } from 'react-router-dom'

const FooterBtn = () => {
  const navigate = useNavigate()
  const FavoriteOnclick = () => {
    navigate('favorite')
  }
  const SearchOnclick = () => {
    navigate('/')
  }
  return (
    <div className={styles.footerBtnWrap}>
      <button type='button' onClick={SearchOnclick} className={styles.footerBtn}>
        검색
      </button>
      <button type='button' onClick={FavoriteOnclick} className={styles.footerBtn}>
        즐겨찾기
      </button>
    </div>
  )
}

export default FooterBtn
