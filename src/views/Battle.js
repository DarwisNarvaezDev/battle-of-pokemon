import React, { useEffect, useState } from 'react';
import { Alert, Box, Container, Typography } from '@mui/material';
import BattleViewHeader from '../components/BattleViewHeader';
import PokemonSelection from '../components/PokemonSelection';
import BattleStatus, { BattleStatusSeverity } from '../components/BattleStatus';

function BattleView() {

  const initialTitle = 'Battle of Pokemon';
  const [battleViewTitle, setBattleViewTitle] = useState(initialTitle);
  const initialMessage = "Please, select your pokemon";
  const [battleMessage, setBattleMessage] = useState(initialMessage);
  const initialMessageColor = BattleStatusSeverity.INFO.color;
  const [battleMessageColor, setBattleMessageColor] = useState(String(initialMessageColor));

  return (
    <>
      <Box
        id="battle-view-main-container"
        aria-label="Container of the main app's view"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center',
          width: '100%',
          height: '700px',
          backgroundColor: "whitesmoke"
        }}
      >
        <Container
          id="battle-view-wrapper"
          aria-label="Responsive wrapper of the main app"
          // style={BattleViewStyles.wrapper}
          sx={{
            maxWidth: '80%',
            width: '70%',
            height: '90%',
            maxHeight: '90%',
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: 'column',
          }}
        >
          <BattleViewHeader battleViewTitle={battleViewTitle} />
          <PokemonSelection />
          <BattleStatus message={battleMessage} color={battleMessageColor} />
        </Container>
      </Box>
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
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    maxWidth: 'sm',
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
