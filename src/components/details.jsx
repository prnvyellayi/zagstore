import React, { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Notification from "../svg/notif-icon";
import Back from "../svg/back-icon";
import styles from "../css/details.module.css";
import Like from "../svg/like";
import Star from "../svg/star";
import items from "../items.json";
import CartWhite from "../svg/cart-icon-white";
import cart from "../cart.json";

const Details = () => {
  const location = useLocation();
  const product = location.state.data;
  const index = location.state.index;

  const [size, setSize] = useState("S");
  const [isClicked, setIsClicked] = useState(false);

  const Footer = () => {
    const [cartItem, setCartItem] = useState({});
    const pricevalue =
      product.price / 1000 > 1
        ? 1 +
          "," +
          ((product.price % 1000) - (product.price % 100)) / 100 +
          ((product.price % 100) - (product.price % 10)) / 10 +
          (product.price % 10)
        : product.price;

    const addToCart = useCallback(
      (item) => {
        let obj = {
          img: item.img,
          title: item.title,
          price: item.price,
          quantity: 1,
          size: size,
        };
        if (
          !cart.find((each) => each.img === obj.img && each.size === obj.size)
        ) {
          cart.push(obj);
        }
      },
      [cartItem]
    );

    return (
      <>
        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.pricespan}>Price</span>
            <span className={styles.inr}>{`INR ${pricevalue}`}</span>
          </div>
          <Link
            to="/cart"
            className={styles.cartbutton}
            onClick={() => {
              setCartItem(product);
              addToCart(product);
            }}
          >
            <CartWhite /> Add to cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>
          <Link style={{ paddingTop: "2px" }} to="/">
            <Back />
          </Link>
          <span className={styles.details}>Details</span>
          <Notification notifs={2} />
        </div>
        <div
          style={{
            background: `url(${product.img}) no-repeat`,
            backgroundSize: "100%",
          }}
          className={styles.img}
        >
          <span
            id="likebutton"
            className={styles.likespan}
            onClick={() => {
              let temp = isClicked;
              setIsClicked(!temp);
              items[index].isSaved = !items[index].isSaved;
            }}
          >
            <Like click={items[index].isSaved} />
          </span>
        </div>
        <span className={styles.name}>{product.title}</span>
        <span className={styles.star}>
          <Star />
          {product.star}/5
          <span
            style={{ color: "rgba(0, 0, 0, 0.60)" }}
          >{`(${product.reviews} Reviews)`}</span>
        </span>
        <p className={styles.para}>
          The name says it all, the right size slightly snugs the body leaving
          enough room for comfort in the sleeves and waist.
        </p>
        <span className={styles.choose}>Choose size</span>
        <div className={styles.sizediv}>
          <button
            onClick={() => setSize("S")}
            className={size === "S" ? styles.sizeActive : styles.size}
          >
            S
          </button>
          <button
            onClick={() => setSize("M")}
            className={size === "M" ? styles.sizeActive : styles.size}
          >
            M
          </button>
          <button
            onClick={() => setSize("L")}
            className={size === "L" ? styles.sizeActive : styles.size}
          >
            L
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
