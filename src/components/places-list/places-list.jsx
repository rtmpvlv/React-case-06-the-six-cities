import React from "react";
import {connect} from "react-redux";
import {Card} from "../card/card";
import {ActionCreator} from "../../store/action";
import {OFFERS_TYPES} from "../types";

export const PlacesList = (props) => {
  const {
    offers,
    onMouseHover,
    className = `cities__places-list places__list tabs__content`,
  } = props;

  return (
    <div className={className}>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onMouseHover={onMouseHover} />
      ))}
    </div>
  );
};

PlacesList.propTypes = OFFERS_TYPES;

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
