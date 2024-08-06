import '../assets/fonts.css';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import PokemonCard from './PokemonCard';
import pokemon from '../store/pokemon';
import { useEffect, useState } from 'react';
import { SessionManager } from '../utils/SessionManager';
import { BattleManager } from '../utils/BattleLogic';

let battleManager = null;

function BattleCards(props) {
  const loading = props.loading;
  const anyPokemonSelected = props.anyPokemonSelected;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(
    props.reducerState.chosenPokemon
  );
  const [opponentPokemon, setOpponentPokemon] = useState(
    props.reducerState.opponentPokemon
  );

  const resolveUserChoice = () => {
    setSelectedPokemon(props.reducerState.chosenPokemon);
    setIsLoading(false);
  };

  const resolveOpponent = () => {
    let opponent = SessionManager.getRandomPokemon(
      props.reducerState.chosenPokemon.id
    );
    setOpponentPokemon(opponent);
  };

  const handleBattleStart = (evt) => {
    battleManager = new BattleManager(
      selectedPokemon,
      setSelectedPokemon,
      opponentPokemon,
      setOpponentPokemon,
      props.reducerDispatcher
    );
    battleManager.startBattle();
  };

  const handleAttack = (evt) => {
    battleManager.attack();
  };

  useEffect(() => {
    if (anyPokemonSelected) {
      resolveUserChoice();
      setTimeout(() => {
        resolveOpponent();
        props.reducerDispatcher({
          type: 'READY_FOR_BATTLE',
          payload: opponentPokemon,
        });
      }, 3000);
    } else {
      setIsLoading(loading);
    }
  }, [loading, anyPokemonSelected]);

  return (
    <>
      <Box
        id="battle-view-battle-cards-container"
        aria-label="Responsive battle cards viewer"
        sx={BattleCardsStyles.responsiveBattleCardsViewer}
      >
        <Grid id="battle-viewer-grid" container spacing={1} columns={3} sx={{}}>
          <Grid
            item
            xs={1}
            sx={{
              height: '400px',
            }}
          >
            <PokemonCard
              opponentWait={isLoading}
              placeholder={anyPokemonSelected ? false : true}
              pokemonData={anyPokemonSelected ? selectedPokemon : pokemon[0]}
              withStats={true}
            />
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              height: '400px',
            }}
          >
            <Stack
              spacing={3}
              sx={BattleCardsStyles.buttonsList}
            >
              <Typography sx={BattleCardsStyles.gameLabel} variant="h2">
                VS
              </Typography>
              <Button
                sx={BattleCardsStyles.gameButton}
                variant="contained"
                color="success"
                disabled={props.reducerState.startButtonDisabled}
                onClick={(evt) => {
                  handleBattleStart(evt);
                }}
              >
                Start Battle
              </Button>
              <Button
                sx={BattleCardsStyles.gameButton}
                variant="contained"
                color="error"
                disabled={props.reducerState.attackButtonDisabled}
                onClick={(evt) => {
                  handleAttack(evt);
                }}
              >
                Attack!
              </Button>
              <Button
                sx={BattleCardsStyles.gameButton}
                variant="contained"
                color="info"
                disabled={props.reducerState.startOverButtonDisabled}
                onClick={() => {
                  SessionManager.clearSession();
                }}
              >
                Start over
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              height: '400px',
            }}
          >
            <PokemonCard
              opponentWait={opponentPokemon.id != null ? false : true}
              pokemonData={anyPokemonSelected ? opponentPokemon : pokemon[0]}
              withStats={true}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const BattleCardsStyles = {
  responsiveBattleCardsViewer: {
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsList: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameLabel: {
    fontFamily: 'Pixelify Sans',
  },
  gameButton: {
    fontFamily: 'Pixelify Sans',
    border: '2px solid black',
    '&:hover': {
      fontSize: '20px',
    },
  },
};

export default BattleCards;
