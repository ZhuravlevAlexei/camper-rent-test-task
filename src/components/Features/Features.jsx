import { useSelector } from "react-redux";
import InfoBlock from "../../shared/components/InfoBlock/InfoBlock.jsx";
import css from "./Features.module.css";
import { selectFilters } from "../../redux/campers/selectors.js";
import { correctIconStroke } from "../../service/serviceFuncs.js";

const Features = ({ camper }) => {
  const filters = useSelector(selectFilters);
  const keys = Object.keys(camper.details);

  const getIconId = (feature) => {
    const equipment = filters.equipment;
    const index = equipment.findIndex((eq) => eq.key === feature);
    if (index >= 0) return equipment[index].iconId;
    return "";
  };

  const getVehicleForm = (form) => {
    const vehicleType = filters.vehicleType;
    const index = vehicleType.findIndex((vt) => vt.key === form);
    if (index >= 0) return vehicleType[index].name;
    return form;
  };

  const getText = (value, feature) => {
    const equipment = filters.equipment;
    const index = equipment.findIndex((eq) => eq.key === feature);
    if (index >= 0) {
      return Number(value) === 1
        ? equipment[index].name
        : equipment[index].name.toLowerCase();
    }
    return feature;
  };

  const showCorrectValue = (value) => {
    if (Number(value) === 1) return "";
    return value;
  };

  return (
    <div className={css.featuresContent}>
      <div className={css.featureBlocks}>
        {keys.map((key) => {
          if (camper.details[key]) {
            return (
              <InfoBlock
                key={key}
                iconId={getIconId(key)}
                text={` ${showCorrectValue(camper.details[key])} ${getText(
                  camper.details[key],
                  key
                )}`}
                stroke={correctIconStroke(getIconId(key))}
              />
            );
          }
        })}
      </div>

      <div>
        <div className={css.featuresBoldText}>Vehicle details</div>
        <div className={css.vehicleDetails}>
          <div className={css.featuresText}>
            <span>Form</span>
            <span>{getVehicleForm(camper.form)}</span>
          </div>
          <div className={css.featuresText}>
            <span>Lengrh</span>
            <span>{camper.length}</span>
          </div>
          <div className={css.featuresText}>
            <span>Width</span>
            <span>{camper.width}</span>
          </div>
          <div className={css.featuresText}>
            <span>Heigth</span>
            <span>{camper.height}</span>
          </div>
          <div className={css.featuresText}>
            <span>Tank</span>
            <span>{camper.tank}</span>
          </div>
          <div className={css.featuresText}>
            <span>Consumption</span>
            <span>{camper.consumption}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
