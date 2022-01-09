import {connect} from "react-redux";
import {ActionCreator} from '../../../store/action';

function mapStateToProps(state) {
  return {
    hoveredElement: state.hoveredElement,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onOfferHover(id) {
      dispatch(ActionCreator.hoverElement(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
