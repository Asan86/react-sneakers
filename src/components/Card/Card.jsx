import React from "react";
import styles from "./Card.module.scss";

function Card({ imgUrl, title, price, onFavorite, onPlus, favorite=false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isfavorite, setIsFavorite] = React.useState(favorite);

  const onClickPlus = () => {
    onPlus({ title, imgUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ title, imgUrl, price });
    setIsFavorite(!isfavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isfavorite ? "/img/uliked.svg" : "/img/unliked.svg"}
          alt="liked"
        />
      </div>
      <img src={imgUrl} alt="sneakerS" width={113} height={112} />
      <h5>{title}</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <div>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"}
            alt="plus"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
