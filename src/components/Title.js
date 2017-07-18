import React from 'react';
import Button from 'antd/lib/button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './Title.css';

const Title = props => (
  <div id="title">
    <ReactCSSTransitionGroup id="rctg"
      transitionName="example"
      transitionAppear={ true }
      transitionAppearTimeout={ 500 }
      transitionEnterTimeout={ 500 }
      transitionLeaveTimeout={ 500 }
    >
      <h1>MINIMO</h1>
      <span>See how they stack up in utility</span>
      <span>Minimalize your life</span>
      <span>Pit your belongings against each other</span>
      <Button autoFocus={ true } onClick={ props.handleClick }>Enter</Button>
    </ReactCSSTransitionGroup>
  </div>
);

export default Title;