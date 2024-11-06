import css from "./Logo.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <svg width="136" height="16">
        <use href={`${logo}#Logo`} />
      </svg>
    </Link>
  );
};

export default Logo;
