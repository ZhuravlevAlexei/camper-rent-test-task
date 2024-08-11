import { useDispatch, useSelector } from "react-redux";
import Icon from "../../shared/components/Icon/Icon.jsx";
import { saveFavorite } from "../../redux/campers/slice.js";
import { selectFavItems } from "../../redux/campers/selectors.js";
import CamperDetailed from "../CamperDetailed/CamperDetailed.jsx";
import InfoBlock from "../../shared/components/InfoBlock/InfoBlock.jsx";
import Button from "../../shared/components/Button/Button.jsx";
import { useModal } from "../../context/index.js";
import css from "./Camper.module.css";
import { capitalizeFirst, ratingText } from "../../service/serviceFuncs.js";

const Camper = ({ camper }) => {
  const { openModal } = useModal();
  const dispatch = useDispatch();
  const favItems = useSelector(selectFavItems);
  const { _id, name, gallery, price } = camper;
  const localePrice = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: false,
  });
  let mainImage = "";
  if (gallery.length > 0) {
    mainImage = gallery[0];
  }

  const handleShowMore = () => {
    // console.log("show more");
    openModal(<CamperDetailed camper={camper} />);
  };

  const getFavIconId = (id) => {
    return favItems.includes(id) ? "heart-red" : "heart-empty";
  };
  const handleIconClick = () => {
    dispatch(saveFavorite(camper._id));
  };

  return (
    <div className={css.mainCard}>
      <img className={css.camperImage} src={mainImage} alt="Camper vehicle" />

      <div className={css.camperInfo}>
        <div>
          <div className={css.camperHeader}>
            <span className={css.camperHeaderBoldText}>{name}</span>
            <div className={css.headerRight}>
              <span className={css.camperHeaderBoldText}>€{localePrice}</span>
              <Icon
                iconId={getFavIconId(_id)}
                className={css.heartIcon}
                onClick={handleIconClick}
              />
            </div>
          </div>

          <div className={css.ratingAndLocation}>
            <Icon iconId="rating-star" className={css.ratingIcon} />
            <span className={css.ratingText}>{ratingText(camper)}</span>
            <Icon iconId="map-pin-active" className={css.locationIcon} />
            <span className={css.locationText}>{camper.location}</span>
          </div>
        </div>

        <p className={css.descriptionText}>{camper.description}</p>

        <div className={css.infoPanel}>
          {camper.adults && (
            <InfoBlock
              iconId="adults"
              iconClassName={css.iconSpc}
              text={`${camper.adults} adults`}
            />
          )}
          {camper.transmission && (
            <InfoBlock
              iconId="automatic"
              text={capitalizeFirst(camper.transmission)}
              stroke={true}
            />
          )}
          {camper.engine && (
            <InfoBlock iconId="petrol" text={capitalizeFirst(camper.engine)} />
          )}
          {camper.details.kitchen && (
            <InfoBlock iconId="kitchen" text={"Kitchen"} stroke={true} />
          )}
          {camper.details.beds && (
            <InfoBlock
              iconId="bed"
              text={`${camper.details.beds} beds`}
              stroke={true}
            />
          )}
          {camper.details.airConditioner && (
            <InfoBlock iconId="ac" text={`AC`} />
          )}
        </div>
        <Button onClick={handleShowMore}>Show more</Button>
      </div>
    </div>
  );
};

export default Camper;
