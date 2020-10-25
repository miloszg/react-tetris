import React from 'react'
import {StyledButton} from './styles/StyledStartButton'
const StartButton = ({callback}) => {
  return (
    <StyledButton
      onClick={callback}
      >
      StartButton
    </StyledButton>
  );
}

export default StartButton;