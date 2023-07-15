import React, { useCallback, useEffect, useState } from "react";
import Back from "../svg/back-icon";
import { Link } from "react-router-dom";
import Notification from "../svg/notif-icon";
import styles from "../css/cart.module.css";
import cart from "../cart.json";
import Decrease from "../svg/decrease";
import Increase from "../svg/increase";
import Delete from "../svg/delete";
import Forward from "../svg/forward";

const Cart = () => {
  const [buy, setBuy] = useState([...cart]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(80);

  useEffect(() => {
    let subtotal = 0,
      Total = 80;
    cart.map((each) => (subtotal += each.price * each.quantity));
    Total += subtotal;
    setSubTotal(subtotal);
    setTotal(Total);
  }, [subTotal]);

  const CartItem = ({ item, index }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const pricevalue = item.price.toLocaleString();

    const handleDecrease = useCallback(() => {
      if (quantity > 1) {
        item.quantity--;
        setSubTotal(subTotal - item.price);
        setTotal(total - item.price);
        setQuantity(item.quantity);
        // setCartItem(item);
      } else {
        cart.splice(index, 1);
        setSubTotal(0);
        setTotal(80);
        setBuy([...cart]);
      }
    }, [quantity]);

    const handleIncrease = useCallback(() => {
      item.quantity++;
      setSubTotal(subTotal + item.price);
      setTotal(total + item.price);
      setQuantity(item.quantity);
      //   setCartItem(item);
    }, [quantity]);

    return (
      <>
        <div className={styles.cartitemdiv}>
          <div
            style={{
              background: `url(${item.img}) no-repeat`,
              backgroundSize: "83px",
            }}
            className={styles.cartimg}
          ></div>
          <div className={styles.info}>
            <div style={{ display: " flex", flexDirection: "column" }}>
              <span className={styles.itemtitle}>{item.title}</span>
              <span className={styles.size}>Size {item.size}</span>
            </div>
            <div>
              <span className={styles.price}>INR {pricevalue}</span>
            </div>
          </div>
          <div className={styles.actions}>
            <button
              className={styles.deletebutton}
              onClick={() => {
                cart.splice(index, 1);
                setSubTotal(0);
                setTotal(80);
                setBuy([...cart]);
              }}
            >
              <Delete />
            </button>
            <div className={styles.addsub}>
              <button className={styles.addsubspan} onClick={handleDecrease}>
                <Decrease />
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button className={styles.addsubspan} onClick={handleIncrease}>
                <Increase />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Summary = () => {
    let Total = total.toLocaleString();
    let subtotal = subTotal.toLocaleString();

    return (
      <>
        <div className={styles.summaryline}>
          <span className={styles.summarytitle}>Sub-total</span>
          <span className={styles.summaryvalue}>INR {subtotal}</span>
        </div>
        <div className={styles.summaryline}>
          <span className={styles.summarytitle}>{`VAT (%)`}</span>
          <span className={styles.summaryvalue}>INR 0.00</span>
        </div>
        <div className={styles.summaryline}>
          <span className={styles.summarytitle}>Shipping fee</span>
          <span className={styles.summaryvalue}>INR 80</span>
        </div>
        <div>
          <hr style={{ width: "90%" }} />
        </div>
        <div className={styles.summaryline}>
          <span className={styles.totaltitle}>Total</span>
          <span className={styles.summaryvalue}>INR {Total}</span>
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
          <span className={styles.mycart}>My Cart</span>
          <Notification notifs={2} />
        </div>
        {buy.map((each, index) => {
          return <CartItem item={each} index={index} />;
        })}
        <input className={styles.coupon} placeholder="Add a voucher"></input>
        <Summary />
      </div>
      <div className={styles.footer}>
        <button className={styles.checkoutbutton}>
          Checkout <Forward />
        </button>
      </div>
    </>
  );
};

export default Cart;
