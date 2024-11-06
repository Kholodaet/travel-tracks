import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <div className={css.message}>
        It looks like we cannot find the page, maybe just{" "}
        <Link to="/" className={css.link}>
          go back?
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
