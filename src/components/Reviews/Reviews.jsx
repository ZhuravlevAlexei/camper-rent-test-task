import { nanoid } from "@reduxjs/toolkit";
import css from "./Reviews.module.css";
import { capitalizeFirst } from "../../service/serviceFuncs.js";
import Icon from "../../shared/components/Icon/Icon.jsx";
const Reviews = ({ camper }) => {
  const starsArray = [1, 2, 3, 4, 5];
  const howManyStarsYellow = (rating) => {
    // return Array(rating).fill("⭐️").join("");

    return Math.ceil((rating / 5) * rating);
  };

  return (
    <div className={css.reviewsContent}>
      {camper.reviews.map((review) => {
        return (
          <div key={nanoid()}>
            <div className={css.reviewsHeader}>
              <div className={css.reviewsCircle}>
                {capitalizeFirst(review.reviewer_name[0])}
              </div>
              <div className={css.nameAndRating}>
                <div className={css.reviewerName}>{review.reviewer_name}</div>
                <div className={css.ratingStars}>
                  {starsArray.map((star) => {
                    if (star <= howManyStarsYellow(review.reviewer_rating)) {
                      return (
                        <Icon
                          key={nanoid()}
                          iconId="rating-star"
                          className={css.ratingIcon}
                        />
                      );
                    } else {
                      return (
                        <Icon
                          key={nanoid()}
                          iconId="star"
                          className={css.ratingIcon}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            <p className={css.reviewText}>{review.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
