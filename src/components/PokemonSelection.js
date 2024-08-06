import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import PokemonCard from './PokemonCard';
import { useEffect, useState } from 'react';
import pokemon from '../store/pokemon';

function PokemonSelection(props) {
  const loading = props.loading;
  const [isLoading, setIsLoading] = useState(true);
  const initialState = pokemon;
  const [pokemons, setPokemons] = useState(initialState);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <>
      <Box
        id="battle-view-pokemon-select-title"
        sx={PokemonSelectionStyles.title}
      >
        <Typography sx={PokemonSelectionStyles.subTitle} variant="h6">
          Select your Pokemon
        </Typography>
      </Box>
      <Box
        id="battle-view-pokemon-select"
        aria-label="Selection panel for pokemons"
        style={PokemonSelectionStyles.container}
        sx={{
          overflow: !matches && 'scroll',
        }}
      >
        <Grid
          id="pokemon-grid"
          container
          rowGap={0}
          columns={{ xs: 1, sm: 2, md: 4, lg: 5 }}
          spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          sx={{
            pt: '4px',
            pl: '4px',
            pr: '4px',
          }}
        >
          {pokemons.map((pokemon) => {
            return (
              <Grid
                key={pokemon.name}
                item
                lg={1}
                md={2}
                sm={2}
                xs={1}
                sx={{ height: '110px' }}
              >
                <PokemonCard
                  key={pokemon.id}
                  reducerState={props.reducerState}
                  reducerDispatcher={props.reducerDispatcher}
                  loading={isLoading}
                  pokemonData={pokemon}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

const PokemonSelectionStyles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    width: '100%',
    height: '5%',
    display: 'flex',
    justifyContent: 'left',
  },
  subTitle: {
    typography: {
      xs: 'body2',
      sm: 'body1',
      lg: 'h6',
    },
  },
};

export default PokemonSelection;
