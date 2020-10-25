import React from 'react'
import {createStage} from '../gameHelpers';

// components
import Stage from './Stage';
import StartButton from './StartButton';
import Display from './Display';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';


const Tetris = ({gameOver, text}) => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>      
        <Stage stage={createStage()}/>
        <aside>
              <div>
                  <Display text="Score"/>
                  <Display text="Rows"/>
                  <Display text="Level"/>
            </div>
            <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

export default Tetris;