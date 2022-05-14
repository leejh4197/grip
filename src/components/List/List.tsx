import styles from './List.module.scss'
import { AiFillStar } from 'react-icons/ai'
import ListModal from 'components/Modal/ListModal'
import { useState } from 'react'
import { Iprops } from 'types/type'

const List = () => {
  const [active, setActive] = useState<Iprops['active']>(false)

  const movieOnclick = () => {
    setActive(!active)
  }

  return (
    <div className={styles.listWrap}>
      <div role='button' className={styles.imgWrap} onClick={movieOnclick} tabIndex={0}>
        <img
          className={styles.movieTitle}
          src='https://m.media-amazon.com/images/M/MV5BMTM5MzI3NTM5Nl5BMl5BanBnXkFtZTgwMTU0MjkwMTE@._V1_SX300.jpg'
        />
      </div>
      <div>{active === true ? <ListModal {...active} /> : null}</div>
      <AiFillStar className={styles.starIcon} />
      <div className={styles.movieDetail}>
        <span>Title: 제목</span>
        <span>Year: 년도</span>
        <span>Type: 장르</span>
      </div>
    </div>
  )
}

export default List
