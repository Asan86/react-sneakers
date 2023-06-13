import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img
        src="/img/sneakers/image1.jpg"
        alt="sneakers"
        width={133}
        height={112}
      />
      <h5>Мужские Кроссовки Nike Air Max 270</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999</b>
        </div>
        <div>
          <button className="button">
            <img
              src="/img/img-card/plus.svg"
              alt="plus"
              width={11}
              height={11}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
