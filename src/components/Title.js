import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Button from 'antd/lib/button';

const Title = props => (
  <div className={ css(styles.page) }>
    <h1 className={ css(styles.title) }>MINIMO</h1>
    <span className={ css(styles.span) }>Pit your belongings against each other</span>
    <span className={ css(styles.span) }>See how they stack up in utility</span>
    <span className={ css(styles.span) }>Minimalize your life</span>
    <Button className={ css(styles.button) } autoFocus={ true } onClick={ props.handleClick }>Enter</Button>
  </div>
);

const styles = StyleSheet.create({
  page: {
    textAlign: 'center',
    margin: '30vw auto',
    fontSize: '1.35em'
  },

  title: {
    display: 'block'
  },

  span: {
    display: 'block'
  },

  button: {
    display: 'block',
    margin: '1em auto'
  }
});

export default Title;