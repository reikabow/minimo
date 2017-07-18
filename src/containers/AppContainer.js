import { connect } from 'react-redux';

import App from '../components/App';
import { setScreen } from '../redux/actions';

const mapStateToProps = state => {
  return {
    screen: state.screen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setScreen: screen => dispatch(setScreen(screen))
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;