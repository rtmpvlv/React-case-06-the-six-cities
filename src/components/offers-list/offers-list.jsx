import React from "react";
import {connect} from "react-redux";
import {OfferCard} from "../offer-card/offer-card";
import {ActionCreator} from "../../store/action";
import {OFFERS_TYPES} from "../types";

export const OffersList = (props) => {
  const {
    offers,
    onMouseHover,
    onSetOfferId,
    className = `cities__places-list places__list tabs__content`,
  } = props;

  return (
    <div className={className}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseHover={onMouseHover}
          onSetOfferId={onSetOfferId}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = OFFERS_TYPES;

const mapStateToProps = (state) => {
  return {
    hoveredElement: state.hoveredElement,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMouseHover(id) {
      dispatch(ActionCreator.hoverElement(id));
    },
    onSetOfferId(id) {
      dispatch(ActionCreator.setOfferId(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
