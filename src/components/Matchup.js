import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Row, Col, Card, Button } from 'antd';

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
  const {newAId, newBId} = getRandomMatchup(numContestants, aId, bId);

  const handleClick = (winnerId, loserId) => {
    handleDecision(winnerId, loserId);
    setMatchup(newAId, newBId);
  }

  if (props.aId == null || props.bId == null)
    props.setMatchup(newAId, newBId);

  return (
    <div className={ css(styles.page) }>
      <span>Click the most useful item of the two displayed.</span>
      <Row gutter={ 8 }>
        <Col span={ 12 }>
          <Button className={ css(styles.card) } onClick={ () => handleClick(aId, bId) }>
            <span>{ a }</span>
          </Button>
        </Col>
        <Col span={ 12 }>
          <Button className={ css(styles.card) } onClick={ () => handleClick(bId, aId) }>
            <span>{ b }</span>
          </Button>
        </Col>
      </Row>
      <Button className={ css(styles.button) } onClick={ goToAddScreen }>
        Back
      </Button>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '80vw',
    display: 'block',
    margin: '30vh auto',
    textAlign: 'center'
  },

  button: {
    width: '20em',
    display: 'block',
    margin: '1.35em auto'
  },

  card: {
    marginTop: '1em',
    width: '100%',
    height: '3em',
    textAlign: 'center',
    fontSize: '1.35em'
  }
});

export default Matchup;