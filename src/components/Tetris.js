import React from 'react'
import Stage from './Stage';
import Cell from './Cell';
import StartButton from './StartButton';
import Display from './Display';
import {createStage} from '../gameHelpers';

const Tetris = ({gameOver, text}) => {
  return (
    <div>
      <Stage stage={createStage()}/>
      <aside>
            <div>
                <Display text="Score"/>
                <Display text="Rows"/>
                <Display text="Level"/>
          </div>
          <StartButton />
      </aside>
    </div>
  );
}

export default Tetris;