import { useSelector } from "react-redux";
import Container from "../../shared/components/Container/Container.jsx";
import { selectCampers } from "../../redux/campers/selectors.js";
import css from "./CatalogueMain.module.css";
import Camper from "../Camper/Camper.jsx";

const CatalogueMain = () => {
  const campers = useSelector(selectCampers);
  return (
    <Container>
      <div className={css.catalogueColumns}>
        <div className={css.catLeft}>
          <div>Location</div>
          <div>Filters</div>
        </div>
        <div className={css.catRight}>
          {campers.length &&
            campers.map((camper) => {
              return <Camper key={camper._id} camper={camper} />;
            })}
        </div>
      </div>
    </Container>
  );
};

export default CatalogueMain;
