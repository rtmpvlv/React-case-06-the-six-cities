import React from 'react';
import {PLACES_COUNT_TYPES} from '../types';
import Main from '../main/main';

const App = (props) => {
  const {placesCount} = props;

  return (
    <Main
      placesCount = {placesCount}
    />
  );
};

App.propTypes = PLACES_COUNT_TYPES;

export default App;
