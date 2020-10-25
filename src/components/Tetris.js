import React from 'react'
import Stage from './Stage';
import Cell from './Cell';
import StartButton from './StartButton';
import Display from './Display';

const Tetris = ({gameOver, text}) => {
  return (
    <div>
      <Stage />
      <aside>
        <Display text="Score"/>
        <Display text="Rows"/>
        <Display text="Level"/>
      </aside>
    </div>
  );
}

export default Tetris;