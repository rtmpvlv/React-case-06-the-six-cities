import React, {useEffect} from "react";
import {connect} from "react-redux";
import Header from "../header/header";
import {LocationsList} from "../locations-list/locations-list";
import {Sort} from "./sort-form";
import PlacesList from "../places-list/places-list";
import Map from "../map/map";
import {SyncLoader} from "react-spinners";
import {css} from "@emotion/react";
import {ActionCreator} from "../../store/action";
import {fetchOffersList} from "../../store/api-actions";
import {MAIN_TYPES} from "../types";

const override = css`
  margin: auto;
`;

const Main = (props) => {
  const {
    selectedCity,
    onUserChoice,
    sortState,
    onSortChange,
    currentOffers,
    isDataLoaded,
    onLoadData,
  } = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList
            currentCity={selectedCity}
            onUserChoice={onUserChoice}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {isDataLoaded ? (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {currentOffers.length} places to stay in {selectedCity}
                  </b>
                  <Sort sortState={sortState} onSortChange={onSortChange} />
                  <PlacesList offers={currentOffers} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map offers={currentOffers} />
                  </section>
                </div>
              </>
            ) : (
              <SyncLoader color="#4481c3" css={override} />
            )}
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
    currentOffers: state.currentOffers,
    sortState: state.sortState,
    isDataLoaded: state.isDataLoaded,
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
    onLoadData() {
      dispatch(fetchOffersList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
