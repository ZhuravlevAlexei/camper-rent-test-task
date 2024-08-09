import Container from "../../shared/components/Container/Container.jsx";
import css from "./CatalogueMain.module.css";
const CatalogueMain = () => {
  return (
    <Container>
      <div className={css.catalogueColumns}>
        <div className={css.catLeft}>
          <div>Location</div>
          <div>Filters</div>
        </div>
        <div className={css.catRight}>Column 2</div>
      </div>
    </Container>
  );
};

export default CatalogueMain;
