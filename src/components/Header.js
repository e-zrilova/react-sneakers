export function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" />
          <span>1205 р.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/favorite.svg" />
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  )
}