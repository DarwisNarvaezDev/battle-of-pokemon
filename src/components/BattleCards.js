import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import PokemonCard from './PokemonCard';
import pokemon from '../store/pokemon';
import '../assets/fonts.css';

function BattleCards() {
  return (
    <>
      <Box
        id="battle-view-battle-cards-container"
        aria-label="Responsive battle cards viewer"
        sx={{
          width: '100%',
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid id="battle-viewer-grid" container spacing={1} columns={3} sx={{}}>
          <Grid
            item
            xs={1}
            sx={{
              height: '400px',
            }}
          >
            <PokemonCard placeholder={true}  pokemonData={pokemon[Math.floor(Math.random() * 5)]} withStats={true} />
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
              sx={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography sx={BattleCardsStyles.gameLabel} variant='h2'>VS</Typography>
              <Button 
                sx={BattleCardsStyles.gameButton}
                variant="contained"
                disabled
                >
                Next Battle
              </Button>
              <Button
                sx={BattleCardsStyles.gameButton}
                variant="contained"
                color="success"
                disabled
              >
                Start Battle
              </Button>
              <Button
                sx={BattleCardsStyles.gameButton}
                variant="contained"
                color="error"
                disabled
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
            <PokemonCard opponentWait={true} pokemonData={pokemon[0]} withStats={true} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const BattleCardsStyles = {
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
