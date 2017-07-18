import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { trim } from 'lodash/string';

const ContestantList = props => (
  <div>
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
  </div>
);

const addNewcomer = (e, add) => {
  console.log(e.target.value);
  const c = trim(e.target.value);
  if (c == '') return;
  else add(c);
  e.target.value = '';
}

const Add = props => (
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
);

export default Add;