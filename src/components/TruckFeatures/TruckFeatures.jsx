import { useSelector } from "react-redux";
import ClientForm from "../ClientForm/ClientForm";
import Features from "../Features/Features";
import css from "./TruckFeatures.module.css";
import { selectTruck } from "../../redux/truck/selectors";
const TruckFeatures = () => {
  const truck = useSelector(selectTruck);
  return (
    <div className={css.feature}>
      <div className={css.featureWrapper}>
        <Features truck={truck} />
        <h3 className={css.equipmentTitle}>Vehicle details</h3>

        <div className={css.truckInfo}>
          <div className={css.truckCategory}>
            <p>Form </p>
            <p>{truck.form}</p>
          </div>
          <div className={css.truckCategory}>
            <p>Length</p>
            <p>{truck.length}</p>
          </div>
          <div className={css.truckCategory}>
            <p>Width</p>
            <p>{truck.width}</p>
          </div>
          <div className={css.truckCategory}>
            <p>Height</p>
            <p>{truck.height}</p>
          </div>
          <div className={css.truckCategory}>
            <p>Tank</p>
            <p>{truck.tank}</p>
          </div>
          <div className={css.truckCategory}>
            <p>Consumption</p>
            <p> {truck.consumption}</p>
          </div>
        </div>
      </div>

      <ClientForm />
    </div>
  );
};

export default TruckFeatures;
