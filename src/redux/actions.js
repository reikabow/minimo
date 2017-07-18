export const ADD_NEWCOMER = 'ADD_NEWCOMER';
export const REMOVE_NEWCOMER = 'REMOVE_NEWCOMER';

export const MERGE_NEWCOMERS = 'MERGE_NEWCOMERS';
export const REMOVE_CONTESTANT = 'REMOVE_CONTESTANT';

export const SET_SCREEN = 'SET_SCREEN';
export const CHOOSE_MATCH = 'CHOOSE_MATCH';
export const DECIDE_MATCH = 'DECIDE_MATCH';

export const SCREENS = {
  TITLE: 'TITLE',
  ADD: 'ADD',
  MATCHUP: 'MATCHUP',
  RANK: 'RANK'
};

export function addNewcomer(contestant) {
  return {
    type: ADD_NEWCOMER,
    contestant
  };
}

export function removeNewcomer(contestantId) {
  return {
    type: REMOVE_CONTESTANT,
    contestantId
  };
}

export function mergeNewcomers(newcomers) {
  return {
    type: MERGE_NEWCOMERS,
    newcomers
  };
}

export function removeContestant(contestantId) {
  return {
    type: REMOVE_CONTESTANT,
    contestantId
  };
}

export function setScreen(screen) {
  return {
    type: SET_SCREEN,
    screen
  };
}

export function chooseMatch(aId, bId) {
  return {
    type: CHOOSE_MATCH,
    matchup: {
      aId,
      bId
    }
  };
}

export function decideMatch(winnerId, loserId) {
  return {
    type: DECIDE_MATCH,
    results: {
      winnerId,
      loserId
    }
  };
}