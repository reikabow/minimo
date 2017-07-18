import React, { Component } from 'react';
import { Input, Button } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './Add.css';

import { trim } from 'lodash/string';

const ContestantList = props => (
  <ReactCSSTransitionGroup id="rctg"
    transitionName="example"
    transitionAppear={ true }
    transitionAppearTimeout={ 500 }
    transitionEnterTimeout={ 500 }
    transitionLeaveTimeout={ 500 }
  >
    {
      props.contestants
      .map(
        (c, i) => 
        <div
          className="add-item"
          onClick={ () => props.handleRemove(i) } 
          key={ i }
        >
          <p>{ c[0] } { c[1] }</p>
        </div>)
    }
  </ReactCSSTransitionGroup>
);

const addNewcomer = (e, add) => {
  console.log(e.target.value);
  const c = trim(e.target.value);
  if (c == '') return;
  else add(c);
  e.target.value = '';
}

const Add = props => (
  <ReactCSSTransitionGroup id="rctg"
    transitionName="example"
    transitionAppear={ true }
    transitionAppearTimeout={ 500 }
    transitionEnterTimeout={ 500 }
    transitionLeaveTimeout={ 500 }
  >
    <div id="add">
      <ContestantList contestants={ props.contestants } handleRemove={ props.handleRemove } />
      {
        props.newcomers.map((c, i) => <h3 key={ i }>{ c }</h3>)
      }
      
      <Input
        id="add-input"
        autoFocus={ true }
        onPressEnter={ e => addNewcomer(e, props.handleAdd) }
        placeholder="Type belonging here and press 'Enter'"
      />
      { props.newcomers.length + props.contestants.length > 3 
        ? <Button id="add-button" onClick={ () => { props.handleMerge(props.newcomers), props.handleMinClick(); } }>Minimalize</Button>
        : <div></div>  }
    </div>
  </ReactCSSTransitionGroup>
);

export default Add;