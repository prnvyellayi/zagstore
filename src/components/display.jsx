import React, { useCallback, useState } from "react";
import items from "../items.json";
import Like from "../svg/like";
import styles from "../css/display.module.css";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const handleClick = useCallback((each, index) => {
    navigate("/details", { state: { data: each, index: index } });
  }, product);

  const Product = ({ each, index }) => {
    const [isClicked, setIsClicked] = useState(false);
    const pricevalue = each.price.toLocaleString()

    return (
      <div
        className={styles.productdiv}
        onClick={(event) => {
          if (
            event.target.id !== "likebutton" &&
            event.target.tagName !== "svg" &&
            event.target.tagName !== "path"
          ) {
            setProduct(each);
            handleClick(each, index);
          }
        }}
      >
        <div
          style={{
            background: `url(${each.img})`,
            backgroundSize: "160px",
          }}
          className={styles.img}
        >
          <span
            id="likebutton"
            className={styles.likespan}
            onClick={() => {
              let temp = isClicked;
              setIsClicked(!temp);
              each.isSaved = !each.isSaved;
            }}
          >
            <Like click={each.isSaved} />
          </span>
        </div>
        <span className={styles.title}>{each.title}</span>
        <span className={styles.price}>INR {pricevalue}</span>
      </div>
    );
  };

  return (
    <>
      {items.map((each, index) => {
        return <Product each={each} index={index} />;
      })}
    </>
  );
};

export default Display;
