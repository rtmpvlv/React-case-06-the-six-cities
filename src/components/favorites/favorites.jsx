import React, {useEffect} from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import {loadOffers} from "../../store/api-actions";
import {Locations} from "../../constants";
import {OFFERS_TYPES} from "../types";

export const Favorites = (props) => {
  const {offers, isDataLoaded, onLoadData} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  const renderOffers = (currentOffers) => (
    currentOffers.map(({id, price, title, type}) => (
      <article key={id} className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src="img/apartment-small-03.jpg"
              width="150"
              height="110"
              alt="Place image"
            />
          </a>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button place-card__bookmark-button--active button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span
                style={{
                  width: `100%`,
                }}
              ></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    ))
  );

  const renderLocation = (city) => {
    const currentOffers = offers.filter((offer) => offer.city.name === city && offer.isFavorite);

    if (currentOffers.length) {
      return (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">{renderOffers(currentOffers)}</div>
        </li>
      );
    }
    return null;
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Locations.map((city) => renderLocation(city))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = OFFERS_TYPES;

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
    isDataLoaded: state.isDataLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData() {
      dispatch(loadOffers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
