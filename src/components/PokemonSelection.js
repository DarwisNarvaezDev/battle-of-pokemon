import { Box, Grid, Typography } from '@mui/material';
import PokemonCard from './PokemonCard';
import { useState } from 'react';
import pokemon from '../store/pokemon';

function PokemonSelection() {
  const initialState = pokemon;
  const [pokemons, setPokemons] = useState(initialState);

  return (
    <>
      <Box
        id="battle-view-pokemon-select"
        aria-label="Selection panel for pokemons"
        style={PokemonSelectionStyles.container}
      >
        <Box
          id="battle-view-pokemon-select-title"
          sx={PokemonSelectionStyles.title}
        >
          <Typography sx={PokemonSelectionStyles.subTitle} variant="h6">Select your Pokemon</Typography>
        </Box>
        <Grid
          id="pokemon-grid"
          container
          rowGap={0}
          columns={{ xs: 1, sm: 2, md: 4, lg: 5 }}
          spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          sx={{
            pl: "4px",
            pr: "4px",
          }}
        >
          {pokemons.map((pokemon) => {
            return (
              <>
                <Grid
                  item
                  lg={1} md={2} sm={2} xs={1}
                  sx={{height: '130px'}}
                >
                  <PokemonCard {...pokemon} />
                </Grid>
              </>
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
    height: '25%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: "scroll",
  },
  title: {
    width: '100%',
    height: '28%',
    display: 'flex',
    justifyContent: 'left',
  },
  subTitle: {
      typography: {
        xs: "body2",
        sm: "body1",
        lg: "h6"
      }
  }
};

export default PokemonSelection;
