import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Matchup.css';

// TODO : STOP RANDOMLY GENERATING OUT OF BOUNDS AFTER CONTESTANTS ARE 
// REMOVED IN THE ADD SCREEN

const randInt = (ceil, current) => {
  let random = Math.floor(Math.random() * ceil);
  return random;
}

const getRandomMatchup = (ceil, aId, bId) => {
  let newAId = randInt(ceil, aId);
  let newBId = randInt(ceil, bId);
  return {newAId, newBId};
}

const Matchup = props => {
  const { handleDecision, setMatchup, aId, bId, a, b, numContestants, goToAddScreen } = props;
  console.log(props);
  
  const {newAId, newBId} = getRandomMatchup(numContestants, aId, bId);

  const handleClick = (winnerId, loserId) => {
    handleDecision(winnerId, loserId);
    setMatchup(newAId, newBId);
  }

  if (props.aId == null || props.bId == null)
    props.setMatchup(newAId, newBId);

  return (
    <div id="matchup">
      <ReactCSSTransitionGroup id="rctg"
        transitionName="example"
        transitionAppear={ true }
        transitionAppearTimeout={ 500 }
        transitionEnterTimeout={ 500 }
        transitionLeaveTimeout={ 500 }
      >
        <Row id="matchup-row" gutter={ 8 } style={{ margin: "1.5em auto" }}>
          <Col span={ 12 }>
            <Card onClick={ () => handleClick(aId, bId) }>
              <span>{ a }</span>
            </Card>
          </Col>
          <Col span={ 12 }>
            <Card onClick={ () => handleClick(bId, aId) }>
              <span>{ b }</span>
            </Card>
          </Col>
        </Row>
        <Button onClick={ goToAddScreen }>
          Back
        </Button>
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Matchup;