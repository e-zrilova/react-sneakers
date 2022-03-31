
import React from 'react';
import styles from './Card.module.scss'

export function Card({ title, price, imageUrl, onClickFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false)
  const onClickPlus = () => {
    onPlus({
      title, price, imageUrl
    })
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img
        width={133}
        height={112}
        src={imageUrl}
        alt="sneakers"
      />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img src={isAdded ? "/img/btn-check.svg" : "/img/btn-plus.svg"} alt="plus" onClick={onClickPlus} className={styles.plus} />
      </div>
    </div>
  )
}