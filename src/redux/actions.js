export const ADD_NEWCOMER = Symbol('ADD_NEWCOMER');
export const REMOVE_NEWCOMER = Symbol('REMOVE_NEWCOMER');

export const MERGE_NEWCOMERS = Symbol('MERGE_NEWCOMERS');
export const REMOVE_CONTESTANT = Symbol('REMOVE_CONTESTANT');

export const SET_SCREEN = Symbol('SET_SCREEN');
export const CHOOSE_MATCH = Symbol('CHOOSE_MATCH');
export const DECIDE_MATCH = Symbol('DECIDE_MATCH');

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