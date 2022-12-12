import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchComments} from "../../store/api-actions";
import Header from "../header/header";
import {ReviewsList} from "./reviews-list";
import {ReviewForm} from "./review-form";
import Map from "../map/map";
import {OfferCard} from "../offer-card/offer-card";
import {OFFERS_TYPES} from "../types";
import {ActionCreator} from "../../store/action";
import {fetchOffer} from "../../store/api-actions";
import {Spinner} from "../spinner/spinner";
import {PropertyImage} from "./image";
import {PageNotFound} from "../404/404";

const LIVING_TYPE = {
  apartment: `Apartment`,
  room: `Room`,
  house: `House`,
  hotel: `Hotel`,
};

const Property = (props) => {
  const {
    offerId: stateOfferId,
    offer,
    offers,
    offerEntities,
    comments = [],
    hoveredElement,
    isCommentsLoaded,
    isOfferLoaded,
    onLoadOffer,
    onLoadComments,
    onOfferHover,
  } = props;

  const offerIdFromParams = parseInt(useParams().id, 10);
  const offerId = stateOfferId || offerIdFromParams;

  if (!offerEntities[offerId]) {
    return <PageNotFound/>;
  }

  useEffect(() => {
    if (!isOfferLoaded || !offer) {
      onLoadOffer(offerId);
    }
  }, [isOfferLoaded]);

  useEffect(() => {
    if (!isCommentsLoaded) {
      onLoadComments(offerId);
    }
  }, [isCommentsLoaded]);

  if (!isOfferLoaded || !isCommentsLoaded) {
    return <Spinner />;
  }

  const nearOffers = offers
    .filter((o) => offerId !== o.id && offer.city.name === o.city.name)
    .slice(0, 3);

  const {
    bedrooms,
    description,
    goods,
    host,
    isPremium,
    maxAdults,
    price,
    title,
    rating,
    type,
  } = offer;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((url, i) => (
                <PropertyImage key={i} url={url} />
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span
                    style={{
                      width: `${rating * 20}%`,
                    }}
                  ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {LIVING_TYPE[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, i) => (
                    <li key={i} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro && (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ReviewsList comments={comments} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearOffers} hoveredElement={hoveredElement} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearOffers.map((o) => (
                <OfferCard key={o.id} offer={o} onMouseHover={onOfferHover} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Property.propTypes = OFFERS_TYPES;

function mapStateToProps(state) {
  return {
    offerId: state.offerId,
    offer: state.offer,
    offers: state.offers,
    offerEntities: state.offerEntities,
    hoveredElement: state.hoveredElement,
    comments: state.comments,
    isOfferLoaded: state.isOfferLoaded,
    isCommentsLoaded: state.isCommentsLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onOfferHover(id) {
      dispatch(ActionCreator.hoverElement(id));
    },
    onLoadComments(id) {
      dispatch(fetchComments(id));
    },
    onLoadOffer(id) {
      dispatch(fetchOffer(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Property);
