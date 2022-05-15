import styles from './ListModal.module.scss'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { movieListAtom } from 'store/Atom'

interface Iprops {
  onClose: () => void
  onOpen: (id: string) => void
  id: string
  open: boolean
}

const ListModal = ({ onClose, onOpen, open, id }: Iprops) => {
  const [list, setList] = useRecoilState(movieListAtom)

  const listId = list.findIndex((data) => data.imdbID === id)
  const favoriteOnclick = () => {
    if (list[listId]) {
      window.localStorage.setItem('list', JSON.stringify(list[listId]))
      onClose()
    } else {
      console.log('에러')
    }
  }
  return (
    <div hidden={!open}>
      <div className={styles.backColor} />
      <div className={styles.listModalWrap}>
        <div className={styles.btnWrap}>
          <button type='button' onClick={favoriteOnclick}>
            즐겨찾기
          </button>
          <button type='button' onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListModal
