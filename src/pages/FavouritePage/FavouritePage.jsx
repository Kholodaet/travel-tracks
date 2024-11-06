import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import { selectTrucks } from "../../redux/truck/selectors";
import TruckList from "../../components/TruckList/TruckList";
import css from "./FavouritePage.module.css";

const FavouritePage = () => {
  const favourites = useSelector(selectFavourites);
  const allTrucks = useSelector(selectTrucks);

  const favouriteTrucks = allTrucks.filter((truck) =>
    favourites.includes(truck.id)
  );

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Your Favourites</h2>
      <div className={css.list}>
        <TruckList filteredTrucks={favouriteTrucks} />
      </div>
    </div>
  );
};

export default FavouritePage;
