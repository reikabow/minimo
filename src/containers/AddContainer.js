import { connect } from 'react-redux';
import zip from 'lodash/fp/zip';
import Add from '../components/Add';
import { addNewcomer,
         removeNewcomer,
         mergeNewcomers,
         removeContestant,
         setScreen,
         SCREENS } from '../redux/actions';

const mapStateToProps = state => {
  const { newcomers, contestants, elos } = state;
  return {
    newcomers,
    contestants: zip(contestants, elos)
                  .sort((a, b) => b[1] - a[1])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAdd: c => dispatch(addNewcomer(c)),
    handleRemoveNewcomer: id => { dispatch(removeNewcomer(id)); },
    handleMerge: newcomers => { dispatch(mergeNewcomers(newcomers)); },
    handleMinClick: () => dispatch(setScreen(SCREENS.MATCHUP)),
    handleRemove: contestantId => dispatch(removeContestant(contestantId))
  };
};

const AddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);

export default AddContainer;