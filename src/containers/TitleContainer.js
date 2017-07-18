import { connect } from 'react-redux';

import Title from '../components/Title';
import { setScreen, SCREENS } from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {
      dispatch(setScreen(SCREENS.ADD));
    }
  }
}

const TitleContainer = connect(
  null,
  mapDispatchToProps
)(Title);

export default TitleContainer;