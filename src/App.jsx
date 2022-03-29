import { Header } from "./components/Header";
import { Card } from "./components/Card/Card";
import { Drawer } from "./components/Drawer";

const DATA_CARD = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/img-1.jpg",
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imageUrl: "/img/sneakers/img-2.jpg",
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/img-3.jpg",
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/img-4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="mb-30 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/loupe.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {DATA_CARD.map(({ title, imageUrl, price, id }) => (
            <Card
              key={id}
              price={price}
              title={title}
              imageUrl={imageUrl}
              onClick={() => console.log(price)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
