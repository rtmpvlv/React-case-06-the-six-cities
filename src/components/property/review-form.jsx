import React, {useState} from "react";

const STARS_VALUES = [`1`, `2`, `3`, `4`, `5`];

export const ReviewForm = () => {
  const [state, setState] = useState({
    rating: 5,
    text: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleRatingChange = (evt) => {
    setState({
      ...state,
      rating: evt.target.value,
    });
  };

  const handleTextChange = (evt) => {
    setState({
      ...state,
      text: evt.target.value,
    });
  };

  const renderStars = () => {
    return STARS_VALUES.map((value) => (
      <>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={value}
          id={`${value}-stars`}
          type="radio"
          onChange={handleRatingChange}
        />
        <label
          htmlFor={`${value}-stars`}
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </>
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
      <div className="reviews__rating-form form__rating">
        {renderStars()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextChange}
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
