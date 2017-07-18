import { combineReducers } from 'redux';
import { ADD_NEWCOMER,
         REMOVE_NEWCOMER,
         MERGE_NEWCOMERS,
         REMOVE_CONTESTANT,
         SET_SCREEN,
         CHOOSE_MATCH,
         DECIDE_MATCH,
         SCREENS } from './actions';

import transform from '../lib/elo';

const INITIAL_ELO = 0;

function screen(state = SCREENS.TITLE, action) {
  switch (action.type) {
    case SET_SCREEN:
      return action.screen;
    default:
      return state;
  }
}

function newcomers(state = [], action) {
  switch (action.type) {
    case ADD_NEWCOMER:
      return [...state, action.contestant]
    case REMOVE_NEWCOMER:
      const id = action.contestantId;
      return [...state.slice(0, id), ...state.slice(id + 1)];
    case MERGE_NEWCOMERS:
      return [];
    default:
      return state;
  }
}

function contestants(state = [], action) {
  switch (action.type) {
    case MERGE_NEWCOMERS:
      return [...state, ...action.newcomers];
    case REMOVE_CONTESTANT:
      const id = action.contestantId;
      return [...state.slice(0, id), ...state.slice(id + 1)];
    default:
      return state;
  }
}

function elos(state = [], action) {
  switch (action.type) {
    case MERGE_NEWCOMERS:
      const newcomers = action.newcomers;
      let initialElos = [];
      for (let i = 0; i < newcomers.length; ++i)
        initialElos = [...initialElos, INITIAL_ELO];
      return [...state, ...initialElos];
    case REMOVE_CONTESTANT:
      const id = action.contestantId;
      return [...state.slice(0, id), ...state.slice(id + 1)]
    case DECIDE_MATCH:
      const { winnerId, loserId } = action.results;
      const winnerElo = state[winnerId];
      const loserElo = state[loserId];
      const { newWinnerElo, newLoserElo } = transform(winnerElo, loserElo, 1);
      const newElos = [...state];
      newElos[winnerId] = newWinnerElo;
      newElos[loserId] = newLoserElo;
      return newElos;
    default:
      return state;
  }
}

function matchup(state = { aId: null, bId: null }, action) {
  switch (action.type) {
    case CHOOSE_MATCH:
      return action.matchup;
    default:
      return state;
  }
}

const minimoApp = combineReducers({
  screen,
  newcomers,
  contestants,
  elos,
  matchup
});

export default minimoApp;