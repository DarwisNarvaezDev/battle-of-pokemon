import React, { useEffect, useReducer, useState } from 'react';
import { Box, Container } from '@mui/material';
import BattleViewHeader from '../components/BattleViewHeader';
import PokemonSelection from '../components/PokemonSelection';
import BattleStatus, { BattleStatusSeverity } from '../components/BattleStatus';
import BattleCards from '../components/BattleCards';
import PokemonBattleReducer, { PokemonBattleReducerInitialStates } from '../reducer/PokemonBattleReducer';
import { SessionManager } from '../utils/SessionManager';
import pokemon from '../store/pokemon';

function BattleView() {
  const initialTitle = 'Battle of Pokemon';
  const [battleViewTitle, setBattleViewTitle] = useState(initialTitle);
  const [pokemons, setPokemons] = useState([]);

  const [reducerState, reducerDispatcher] = useReducer(
    PokemonBattleReducer,
    PokemonBattleReducerInitialStates
  );

  const fetchPokemons = () => {
    SessionManager.storePokemons(pokemon);
    setPokemons(pokemon);
    reducerDispatcher({ type: 'POKEMON_DATA_LOADED' });
  };

  useEffect(() => {
    const sessionPokemons = SessionManager.getPokemonsFromSession();
    if (sessionPokemons) {
      setPokemons(sessionPokemons);
      SessionManager.storePokemons(sessionPokemons);
      reducerDispatcher({ type: 'POKEMON_DATA_LOADED' });
      const userSelection = SessionManager.getChosenPokemon();
      if( userSelection ){
        reducerDispatcher({ type: 'POKEMON_SELECTED', payload: userSelection });
      }
    } else {
      setTimeout(() => {
        fetchPokemons();
      }, 3000);
    }
  }, []);

  return (
    <>
      <Box
        id="battle-view-main-container"
        aria-label="Container of the main app's view"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '700px',
          backgroundColor: 'whitesmoke',
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
            gap: 2,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <BattleViewHeader battleViewTitle={battleViewTitle} />
          <PokemonSelection
            loading={reducerState.loading}
            reducerState={reducerState}
            reducerDispatcher={reducerDispatcher}
          />
          <BattleStatus
            message={reducerState.battleMessage}
            color={reducerState.battleStatusColor}
          />
          <BattleCards
            loading={reducerState.loading}
            reducerDispatcher={reducerDispatcher}
            reducerState={reducerState}
            anyPokemonSelected={reducerState.anyPokemonSelected}
          />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
};

export default BattleView;
