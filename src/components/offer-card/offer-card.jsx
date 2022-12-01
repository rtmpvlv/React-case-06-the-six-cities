import React from "react";
import {useHistory} from "react-router-dom";
import {AppRoute} from "../../constants";
import {OFFER_TYPES} from "../types";

export const OfferCard = (props) => {
  const {offer, onMouseHover, onSetOfferId} = props;
  const {id, isPremium, previewImage, price, title, type, rating} = offer;
  const history = useHistory();

  const handleMouseEnter = () => {
    onMouseHover(id);
  };

  const handleMouseLeave = () => {
    onMouseHover(null);
  };

  const handleClick = () => {
    onSetOfferId(id);
    history.push(AppRoute.ROOM + id);
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className="cities__image-wrapper place-card__image-wrapper"
        onClick={handleClick}
      >
        <img
          className="place-card__image"
          src={previewImage}
          width="260"
          height="200"
          alt="Place image"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${rating * 20}%`,
              }}
            ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={handleClick}>
          {title}
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = OFFER_TYPES;
