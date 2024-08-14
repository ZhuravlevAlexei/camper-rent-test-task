import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
// import Select, { components } from "react-select";
import Container from "../../shared/components/Container/Container.jsx";
import {
  selectCampers,
  selectFilters,
  selectPage,
  selectTotal,
} from "../../redux/campers/selectors.js";
import css from "./CatalogueMain.module.css";
import Camper from "../Camper/Camper.jsx";
import Button from "../../shared/components/Button/Button.jsx";
import { icon } from "../../icons/index.js";
import InfoBlock from "../../shared/components/InfoBlock/InfoBlock.jsx";
import clsx from "clsx";
import { setFilters, setPage } from "../../redux/campers/slice.js";
import { correctIconStroke } from "../../service/serviceFuncs.js";
import { useState } from "react";

const CatalogueMain = () => {
  const dispatch = useDispatch();
  const [chosenLocation, setChosenLocation] = useState("");
  const limit = 4;
  const items = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);

  const campers = items.slice(0, Math.min(limit * page, total));
  const filters = useSelector(selectFilters);
  const locationOptions = [];

  // for react-select
  //options list for select
  filters.location.map((loc) => {
    locationOptions.push({
      value: loc,
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
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

  // can use external components and style them here
  // const SingleValue = ({ children, ...props }) => (
  //   <components.SingleValue {...props}>{children}</components.SingleValue>
  // );

  // const Option = (props) => {
  //   return (
  //     <div
  //       {...props.innerProps}
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         fontSize: 16,
  //         lineHeight: 1.6, //??? line height unnormal!
  //         color: "#475467",
  //         cursor: "pointer",
  //         backgroundColor: "#f2f4f7",
  //       }}
  //     >
  //       {props.data.label}
  //     </div>
  //   );
  // };

  const handleLocationChange = (option) => {
    setChosenLocation(option);
  };
  // for react-select end

  const handleSearch = () => {
    console.log("search");
    console.log(chosenLocation);
  };

  const handleLoadMore = () => {
    if (page * limit >= total) {
      return;
    }
    dispatch(setPage(page + 1));
  };

  const handleCheckClick = (type, key) => {
    dispatch(setFilters({ type, key }));
  };

  return (
    <Container>
      <div className={css.catalogueColumns}>
        <div className={css.catLeft}>
          <div>
            <div className={css.filtersText}>Location</div>

            <Select // react-select
              // className={css.locSelect} // can use extrnal css classes
              //for each part of react-select component

              // or can use styles right here or in array of styles
              styles={{
                singleValue: (base) => ({
                  ...base,
                  height: 48,
                  padding: 18,
                  fontSize: 16,
                  lineHeight: 20,
                  borderRadius: 10,
                  background: "#f2f4f7",
                  color: "#475467",
                  display: "flex",
                  alignItems: "center",
                }),
                option: (base) => ({
                  ...base,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 16,
                  lineHeight: 1, //??? line height unnormal !
                  color: "#475467",
                  cursor: "pointer",
                  backgroundColor: "#f2f4f7",
                }),
                container: (provided) => ({
                  ...provided,
                  width: "360px",
                  height: "56px",
                  background: "#F2F4F7",
                  borderRadius: 10,
                }),
                control: (provided) => ({
                  ...provided,
                  width: "100%",
                  height: "100%", // Set height for select buttons
                  background: "#F2F4F7",
                }),
                menu: (provided) => ({
                  ...provided,
                  width: "50%", // Set width for options list
                }),
              }}
              // components={
              //   {
              //     // SingleValue,
              //     // Option,
              //   }
              // }
              defaultValue={chosenLocation}
              value={chosenLocation}
              isClearable
              // isMulti
              isSearchable
              name="location" // be carefull with name - it will be used as controlled form input. use defaultValue together with name
              placeholder="Choose location"
              options={locationOptions}
              onChange={handleLocationChange}
              // react-select end
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
          {campers &&
            campers.map((camper) => {
              return <Camper key={camper._id} camper={camper} />;
            })}
          <div className={css.loadMore}>
            <Button className={css.buttonLoadMore} onClick={handleLoadMore}>
              Load more
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CatalogueMain;
