import styles from './ListModal.module.scss'

const ListModal = () => {
  const Test = [
    {
      Title: '타이틀',
      Year: '년도',
      Type: '장르',
    },
  ]
  const favoriteOnclick = () => {
    window.localStorage.setItem('list', JSON.stringify(Test))
  }
  return (
    <div>
      <div className={styles.backColor} />
      <div className={styles.listModalWrap}>
        <div className={styles.btnWrap}>
          <button type='button' onClick={favoriteOnclick}>
            즐겨찾기
          </button>
          <button type='button'>취소</button>
        </div>
      </div>
    </div>
  )
}

export default ListModal
