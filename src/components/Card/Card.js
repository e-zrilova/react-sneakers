import styles from './Card.module.scss'

export function Card({ title, price, imageUrl, onClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
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
        <button className={styles.button} onClick={onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  )
}