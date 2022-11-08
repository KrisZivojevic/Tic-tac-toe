import { useState } from 'react';
import './Square.css';

function Square(props) {
    return (
    <div className="square" onClick={props.handleValue}>{props.value}</div>
  )
}

export default Square;