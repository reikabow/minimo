import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import TitleContainer from '../containers/TitleContainer';
import AddContainer from '../containers/AddContainer';
import MatchupContainer from '../containers/MatchupContainer';

import { SCREENS } from '../redux/actions';

const App = props => {
  switch(props.screen) {
    case SCREENS.TITLE:
      return <TitleContainer />;
    case SCREENS.ADD:
      return <AddContainer />;
    case SCREENS.MATCHUP:
      return <MatchupContainer />;
    default:
      return <div>Unknown screen: { props.screen }</div>;
  } 
};

export default App;
