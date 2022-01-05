import {connect} from "react-redux";
import {ActionCreator} from '../../../store/action';

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity,
    offers: state.currentOffers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUserChoice(item) {
      dispatch(ActionCreator.changeCity(item));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
