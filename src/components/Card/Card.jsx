import React from "react";
import styles from "./Card.module.scss";

function Card({imgUrl, title, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({title, imgUrl, price});
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
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
