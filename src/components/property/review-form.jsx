import React, {useState} from "react";
import PropTypes from "prop-types";

const STARS = [`5`, `4`, `3`, `2`, `1`];

export const ReviewForm = ({offerId, onPostComment}) => {
  const [comment, setComment] = useState({
    rating: null,
    comment: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onPostComment(offerId, comment);
  };

  const handleRatingChange = (evt) => {
    setComment({
      ...comment,
      rating: evt.target.value,
    });
  };

  const handleCommentChange = (evt) => {
    setComment({
      ...comment,
      comment: evt.target.value,
    });
  };

  const renderStars = () => {
    return STARS.map((star) => (
      <React.Fragment key={star}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={star}
          id={`${star}-stars`}
          type="radio"
          onChange={handleRatingChange}
        />
        <label
          htmlFor={`${star}-stars`}
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </React.Fragment>
    ));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">{renderStars()}</div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{` `}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
        >
          Submit
        </button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  offerId: PropTypes.number.isRequired,
  onPostComment: PropTypes.func.isRequired,
};
