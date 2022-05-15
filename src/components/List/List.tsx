import styles from './List.module.scss'
import { AiFillStar } from 'react-icons/ai'
import ListModal from 'components/Modal/ListModal'
import { SetStateAction, useState } from 'react'
import { useRecoilState } from 'recoil'
import { movieListAtom } from 'store/Atom'

const List = () => {
  const [active, setActive] = useState(false)
  const [movieList, setMovieList] = useRecoilState(movieListAtom)
  const [listId, setListId] = useState('')

  const handelModalOpen = (id: string) => {
    setActive(true)
    setListId(id)
  }
  const handelModalClose = () => {
    setActive(false)
  }

  return (
    <div>
      {movieList.map((list, idx) => {
        return (
          <div key={idx} className={styles.listWrap}>
            <div role='button' className={styles.imgWrap}>
              <img className={styles.movieTitle} src={list.Poster} alt='' />
            </div>
            <AiFillStar className={styles.starIcon} onClick={() => handelModalOpen(list.imdbID)} />
            <div className={styles.movieDetail}>
              <span>Title: {list.Title}</span>
              <span>Year: {list.Year}</span>
              <span>Type: {list.Type}</span>
            </div>
          </div>
        )
      })}
      <ListModal onClose={handelModalClose} onOpen={handelModalOpen} open={active} id={listId} />
    </div>
  )
}

export default List
