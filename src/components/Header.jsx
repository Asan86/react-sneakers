import React from "react";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo.png" alt="logo" width={40} height={40} />
        <div>
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img
            onClick={props.onClickCart}
            className="cu-p"
            src="/img/cart.svg"
            alt="cart"
            width={18}
            height={18}
          />
          <span className="mr-30 cu-p">1205 руб.</span>
          <img src="/img/hard.svg" alt="hard" width={18} height={18} />
        </li>
        <li>
          <img src="/img/user.svg" alt="user" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
