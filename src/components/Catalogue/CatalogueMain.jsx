import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Container from "../../shared/components/Container/Container.jsx";
import { selectCampers, selectFilters } from "../../redux/campers/selectors.js";
import css from "./CatalogueMain.module.css";
import Camper from "../Camper/Camper.jsx";
import Button from "../../shared/components/Button/Button.jsx";
// import Icon from "../../shared/components/Icon/Icon.jsx";
import { icon } from "../../icons/index.js";
import InfoBlock from "../../shared/components/InfoBlock/InfoBlock.jsx";
import clsx from "clsx";
import { setFilters } from "../../redux/campers/slice.js";
import { correctIconStroke } from "../../service/serviceFuncs.js";

const CatalogueMain = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const locationOptions = [];

  filters.location.map((loc) => {
    locationOptions.push({
      value: loc,
      label: (
        <div>
          <svg
            alt="icon"
            role="img"
            style={{
              width: 18,
              height: 20,
              fill: "none",
              stroke: "black",
              marginRight: 8,
            }}
          >
            <use xlinkHref={`${icon}#${"map-pin-active"}`} />
          </svg>
          {loc}
        </div>
      ),
    });
  });

  const SingleValue = ({ data }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
      }}
    >
      <svg
        alt="icon"
        role="img"
        style={{
          width: 18,
          height: 20,
          fill: "none",
          stroke: "black",
          marginRight: 8,
        }}
      >
        <use xlinkHref={`${icon}#${"map-pin-active"}`} />
      </svg>
      {data.label.props.children[1]}
    </div>
  );
  const Option = (props) => {
    return (
      <div
        {...props.innerProps}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "#f7f7f7",
        }}
      >
        {props.data.label}
      </div>
    );
  };

  const handleSearch = () => {
    console.log("search");
  };

  const handleCheckClick = (type, key) => {
    console.log("check: ", type, key);
    dispatch(setFilters({ type, key }));
  };

  return (
    <Container>
      <div className={css.catalogueColumns}>
        <div className={css.catLeft}>
          <div>
            <div className={css.filtersText}>Location</div>
            <Select
              className={css.locSelect}
              options={locationOptions}
              components={{ SingleValue, Option }}
              placeholder="Choose location"
            />
          </div>
          <div>
            <div className={css.filtersText}>Filters</div>
            <div className={css.filtersEquipment}>
              <div className={css.filtersTextBold}>Vehicle equipment</div>
              <div className={css.equipmentBlocks}>
                {filters.equipment &&
                  filters.equipment.map((eq) => {
                    return (
                      <div
                        key={eq.key}
                        onClick={() => handleCheckClick("equipment", eq.key)}
                        className={css.blockThumb}
                      >
                        <InfoBlock
                          text={eq.name}
                          iconId={eq.iconId}
                          // stroke={true}
                          stroke={correctIconStroke(eq.iconId)}
                          className={clsx(
                            css.equipmentBlock,
                            eq.checked && css.activeBlock
                          )}
                          iconSize={32}
                          classNameText={css.equipmentBlockText}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div>
            <div className={css.filtersTextBold}>Vehicle type</div>
            <div className={css.equipmentBlocks}>
              {filters.vehicleType &&
                filters.vehicleType.map((vt) => {
                  return (
                    <div
                      key={vt.key}
                      onClick={() => handleCheckClick("vehicleType", vt.key)}
                      className={css.blockThumb}
                    >
                      <InfoBlock
                        text={vt.name}
                        iconId={vt.iconId}
                        className={clsx(
                          css.equipmentBlock,
                          vt.checked && css.activeBlock
                        )}
                        iconSize={32}
                        classNameText={css.equipmentBlockText}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <Button className={css.buttonSearch} onClick={handleSearch}>
            Search
          </Button>
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
