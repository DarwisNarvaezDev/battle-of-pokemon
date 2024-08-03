import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import BattleViewHeader from '../components/BattleViewHeader';
import PokemonSelection from '../components/PokemonSelection';

function BattleView() {
  const initialTitle = 'Battle of Pokemon';
  const [battleViewTitle, setBattleViewTitle] = useState(initialTitle);

  return (
    <>
      <div
        id="battle-view-main-container"
        aria-label="Container of the main app's view"
        maxWidth={BattleViewStyles.component.container.maxWidth}
        style={BattleViewStyles.mainContainer}
      >
        <Container
          id="battle-view-wrapper"
          aria-label="Responsive wrapper of the main app"
          style={BattleViewStyles.wrapper}
        >
          <BattleViewHeader battleViewTitle={battleViewTitle} />
          <PokemonSelection />
        </Container>
      </div>
    </>
  );
}

const BattleViewStyles = {
  component: {
    container: {
      maxWidth: 'sm',
    },
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    maxWidth: 'sm',
    backgroundColor: 'whitesmoke',
  },
  wrapper: {
    maxWidth: '80%',
    width: '70%',
    height: '90%',
    maxHeight: '90%',
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: 'column',
  },
};

export default BattleView;
