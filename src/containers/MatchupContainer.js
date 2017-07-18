import { connect } from 'react-redux';

import Matchup from '../components/Matchup';
import { chooseMatch, decideMatch, setScreen, SCREENS } from '../redux/actions';

const mapStateToProps = state => {
  return {
    aId: state.matchup.aId,
    bId: state.matchup.bId,
    a: state.contestants[state.matchup.aId],
    b: state.contestants[state.matchup.bId],
    numContestants: state.contestants.length
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setMatchup: (aId, bId) => {
      dispatch(chooseMatch(aId, bId));
    },
    handleDecision: (winnerId, loserId) => {
      dispatch(decideMatch(winnerId, loserId));
    },
    goToAddScreen: () => {
      dispatch(setScreen(SCREENS.ADD));
    }
  };
};

const MatchupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Matchup);

export default MatchupContainer;