import React from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import {HeaderLocationsList} from "../locations-list/header-locations-list";
import {Sort} from "./sort-form";
import PlacesList from "../places-list/places-list";
import Map from "../map/map";
import {ActionCreator} from "../../store/action";
import {MAIN_TYPES} from "../types";

const Main = (props) => {
  const {
    selectedCity,
    onUserChoice,
    sortState,
    onSortChange,
    offers,
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <HeaderLocationsList
            selectedCity={selectedCity}
            onUserChoice={onUserChoice}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {selectedCity}
              </b>
              <Sort sortState={sortState} onSortChange={onSortChange} />
              <PlacesList offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = MAIN_TYPES;

const mapStateToProps = (state) => {
  return {
    selectedCity: state.selectedCity,
    offers: state.currentOffers,
    sortState: state.sortState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserChoice(item) {
      dispatch(ActionCreator.changeCity(item));
    },
    onSortChange(item) {
      dispatch(ActionCreator.changeSort(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
