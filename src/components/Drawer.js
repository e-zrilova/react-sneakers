export function Drawer({ onClose, DATA_CART = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex align-center justify-between">
          Корзина
          <img
            width={32}
            height={32}
            src="/img/btn-remove.svg"
            alt="remove"
            className="cu-p"
            onClick={onClose}
          />
        </h2>
        <div className="items">

          {DATA_CART.map(({ title, imageUrl, price, id }) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                className="cartItemImg"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{title}</p>
                <b>{price} руб.</b>
              </div>
              <img
                width={32}
                height={32}
                src="/img/btn-remove.svg"
                alt="remove"
                className="removeBtn"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )

}