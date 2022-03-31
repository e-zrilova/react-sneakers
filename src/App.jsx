import React from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card/Card";
import { Drawer } from "./components/Drawer";

function App() {
  const [DATA_CARD, setDataCard] = React.useState([]);
  const [DATA_CART, setDataCart] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(() => {
    fetch("https://62445a0039aae3e3b74effdb.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDataCard(json);
      });
  }, []);

  const onAddtoCart = (obj) => {
    setDataCart((prev) => [...prev, obj]);
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer DATA_CART={DATA_CART} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="mb-30 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/loupe.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {DATA_CARD.map(({ title, imageUrl, price, id }) => (
            <Card
              key={id}
              price={price}
              title={title}
              imageUrl={imageUrl}
              onClickFavorite={() => console.log("Добавили в закладки")}
              onPlus={(obj) => onAddtoCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
