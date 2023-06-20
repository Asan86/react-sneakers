import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center cu-p">
          <img src="/img/logo.png" alt="logo" width={40} height={40} />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-20 cu-p">
          <img
            onClick={props.onClickCart}
            className="cu-p"
            src="/img/cart.svg"
            alt="Корзина"
            width={18}
            height={18}
          />
          <span className="mr-20 cu-p">1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-30 cu-p"
              src="/img/heard.svg"
              alt="Закладки"
              width={18}
              height={18}
            />
          </Link>
        </li>

        <li>
          <img src="/img/user.svg" alt="Пользователь" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
