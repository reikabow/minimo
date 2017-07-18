import React from 'react';
import Button from 'antd/lib/button';

const Title = props => (
  <div id="title">
    <h1>MINIMO</h1>
    <span>Pit your belongings against each other</span>
    <span>See how they stack up in utility</span>
    <span>Minimalize your life</span>
    <Button autoFocus={ true } onClick={ props.handleClick }>Enter</Button>
  </div>
);

export default Title;