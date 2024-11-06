import { Link } from "react-router-dom";
import css from "./MainInfo.module.css";

const MainInfo = () => {
  return (
    <section className={css.mainContainer}>
      <div className={css.mainWrapper}>
        <h1 className={css.mainTitle}>Campers of your dreams</h1>
        <p className={css.mainText}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <button type="button" className={css.mainButton}>
            View Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MainInfo;
