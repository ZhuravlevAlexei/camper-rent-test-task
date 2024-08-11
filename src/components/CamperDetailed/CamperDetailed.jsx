import clsx from "clsx";
import { useState } from "react";
import { ratingText } from "../../service/serviceFuncs.js";
import Icon from "../../shared/components/Icon/Icon.jsx";
import css from "./CamperDetailed.module.css";
import Features from "../Features/Features.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import BookVan from "../BookVan/BookVan.jsx";

const CamperDetailed = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");
  const localePrice = camper.price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: false,
  });

  const handlTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={css.modalContent}>
      <div>
        <span className={css.camperHeaderBoldText}>{camper.name}</span>
        <div className={css.ratingAndLocation}>
          <Icon iconId="rating-star" className={css.ratingIcon} />
          <span className={css.ratingText}>{ratingText(camper)}</span>
          <Icon iconId="map-pin-active" className={css.locationIcon} />
          <span className={css.locationText}>{camper.location}</span>
        </div>
        <span className={css.camperHeaderBoldText}>€{localePrice}</span>
      </div>

      <div className={css.gallery}>
        {camper.gallery.map((image) => (
          <img
            key={image}
            src={image}
            alt={camper.name}
            className={css.camperImage}
          />
        ))}
      </div>

      <p className={css.descriptionText}>{camper.description}</p>

      <div className={css.featuresAndReviews}>
        <div className={css.tabs}>
          <div
            className={clsx(
              css.featuresHeader,
              activeTab === "features" && css.activeTab
            )}
            onClick={() => handlTabClick("features")}
          >
            Features
          </div>
          <div
            className={clsx(
              css.featuresHeader,
              activeTab === "reviews" && css.activeTab
            )}
            onClick={() => handlTabClick("reviews")}
          >
            Reviews
          </div>
        </div>
        <div className={css.featureColumns}>
          {activeTab === "features" && <Features camper={camper} />}
          {activeTab === "reviews" && <Reviews camper={camper} />}
          <BookVan />
        </div>
      </div>
    </div>
  );
};

export default CamperDetailed;
