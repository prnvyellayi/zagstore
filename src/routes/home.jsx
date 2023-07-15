import React, { useState } from "react";
import styles from "../css/home.module.css";
import Notification from "../svg/notif-icon";
import Filter from "../svg/filter-icon";
import Footer from '../components/footer'
import Display from "../components/display";

const Home = () => {
  const categories = ["All", "Men", "Women", "Kids"];
  const [scrollDown, setScrollDown] = useState(false);

  const handleScroll = (e) => {
    const window = e.target;

    if (this.prev > window.scrollTop) {
      setScrollDown(true);
    } else if (this.prev < window.scrollTop) {
      setScrollDown(false);
    }
    this.prev = window.scrollTop;
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>
          <span className={styles.discover}>Discover</span>
          <Notification notifs={2} />
        </div>
        <div className={styles.search}>
          <input
            type="search"
            className={styles.input}
            placeholder="Search anything"
          />
          <span className={styles.filterspan}>
            <Filter />
          </span>
        </div>
        <div className={styles.category}>
          {categories.map((each) => {
            return <span className={styles.categoryspan}>{each}</span>;
          })}
        </div>
        <div className={styles.display}>
          <Display />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
