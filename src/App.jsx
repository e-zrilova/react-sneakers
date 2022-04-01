import React from "react";
import axios from "axios";
import { Header } from "./components/Header";
import { Card } from "./components/Card/Card";
import { Drawer } from "./components/Drawer";

function App() {
  const [DATA_CARD, setDataCard] = React.useState([]);
  const [DATA_CART, setDataCart] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("https://62445a0039aae3e3b74effdb.mockapi.io/items")
      .then((res) => {
        setDataCard(res.data);
      });
    axios
      .get("https://62445a0039aae3e3b74effdb.mockapi.io/cart")
      .then((res) => {
        setDataCart(res.data);
      });
  }, []);

  const onAddtoCart = (obj) => {
    axios.post("https://62445a0039aae3e3b74effdb.mockapi.io/cart", obj);
    setDataCart((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    // axios.delete(`https://62445a0039aae3e3b74effdb.mockapi.io/cart${id}`);
    setDataCart((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          DATA_CART={DATA_CART}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="mb-30 d-flex align-center justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : `Все кроссовки`}
          </h1>
          <div className="search-block">
            <img src="/img/loupe.svg" alt="Search" />
            {searchValue && (
              <img
                width={32}
                height={32}
                src="/img/btn-remove.svg"
                alt="remove"
                className="cu-p clear"
                onClick={() => setSearchValue("")}
              />
            )}
            <input
              placeholder="Поиск..."
              onChange={onChangeSearchInput}
              value={searchValue}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {DATA_CARD.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          ).map(({ title, imageUrl, price, id }) => (
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
