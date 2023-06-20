import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Houme from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavotites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    // fetch("https://648b2bb317f1536d65ea873d.mockapi.io/items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });
    axios.get("http://localhost:3001/items").then((res) => {
      setItems(res.data);
    });
    axios.get("http://localhost:3001/cart").then((res) => {
      setCartItems(res.data);
    });
    axios.get("http://localhost:3001/favorites").then((res) => {
      setFavotites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("http://localhost:3001/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemuveItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find((obj) => obj.id === obj.id)) {
      axios.delete(`/favorites/${obj.id}`);
      setFavotites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post("http://localhost:3001/favorites", obj);
      setFavotites((prev) => [...prev, obj]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemuve={onRemuveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Houme
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
