import React from "react";
import { Link } from "react-router-dom";
import SettingsIcon from "../svg/settings-icon";
import HomeIcon from "../svg/home-icon";
import LikeIcon from "../svg/like-icon";
import CartIcon from "../svg/cart-icon";
import styles from '../css/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/" className={styles.navbuttons}>
        <HomeIcon />
        <span className={styles.navspan}>Home</span>
      </Link>
      <Link to="/likes" className={styles.navbuttons}>
        <LikeIcon />
        <span className={styles.navspan}>Saved</span>
      </Link>
      <Link to="/cart" className={styles.navbuttons}>
        <CartIcon />
        <span className={styles.navspan}>Cart</span>
      </Link>
      <Link to="/settings" className={styles.navbuttons}>
        <SettingsIcon />
        <span className={styles.navspan}>Settings</span>
      </Link>
    </div>
  );
};

export default Footer;
