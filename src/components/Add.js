import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Input, Button } from 'antd';
import { trim } from 'lodash/string';

const ContestantList = props => (
  <div className={ css(styles.contestantList) }>
    {
      props.contestants.map((c, i) => 
        <div onClick={ () => props.handleRemove(i) } key={ i }>
          <p>{ c[0] } { c[1] }</p>
        </div>)
    }
  </div>
);

const NewcomersList = props => (
  <div className={ css(styles.contestantList) }>
    {
      props.newcomers.map((c, i) =>
        <div key={ i }>
          <p>{ c }</p>
        </div>)
    }
  </div>
)

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
    <NewcomersList newcomers={ props.newcomers } />
    <Input
      className={ css(styles.input) }
      autoFocus={ true }
      onPressEnter={ e => addNewcomer(e, props.handleAdd) }
      placeholder="Type belonging here and press 'Enter'"
    />
    { props.newcomers.length + props.contestants.length > 3 
      ? <Button className={ css(styles.minButton) } onClick={ () => { props.handleMerge(props.newcomers), props.handleMinClick(); } }>Minimalize</Button>
      : <div></div>  }
  </div>
);

const styles = StyleSheet.create({
  input: {
    width: '20em',
    display: 'block',
    position: 'absolute',
    bottom: '25%',
    left: '0',
    right: '0',
    margin: '0 auto'
  },

  minButton: {
    position: 'absolute',
    bottom: '30%',
    left: '0',
    right: '0',
    width: '10em',
    display: 'block',
    margin: '0 auto'
  },

  contestantList: {
    marginTop: '5em',
    display: 'block',
    margin: '0 auto',
    width: '20em',
    height: '20%',
    overflowY: 'scroll'
  }
});

export default Add;