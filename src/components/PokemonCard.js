import {
  Box,
  Divider,
  LinearProgress,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Stat from './Stat';
import OpponentPlaceholder from './OpponentPlaceholder';

function PokemonCard(props) {
  const { id, name, attack, defense, hp, speed, type, imageUrl } =
    props.pokemonData;

  const withStats = props.withStats;
  const placeholder = props.placeholder;
  const opponentWait = props.opponentWait;

  return (
    <>
      <Box
        id="pokemon-card-container"
        sx={
          withStats
            ? PokemonCardStyles.containerWStats
            : PokemonCardStyles.container
        }
      >
        {opponentWait && (
          <>
            <OpponentPlaceholder />
          </>
        )}
        {!opponentWait && (
          <>
            <Box
              id="pokemon-card-img-wrapper"
              sx={
                withStats
                  ? PokemonCardStyles.statsImgWrapper
                  : PokemonCardStyles.wrapperWoStats
              }
            >
              <img
                style={
                  placeholder
                    ? PokemonCardStyles.placeholderImg
                    : PokemonCardStyles.img
                }
                src={imageUrl}
                alt={name}
              ></img>
            </Box>
            <Box
              id="pokemon-card-name"
              sx={
                withStats
                  ? PokemonCardStyles.labelWithStats
                  : PokemonCardStyles.label
              }
            >
              <Typography variant={withStats ? 'h5' : 'body1'}>
                {placeholder ? 'Select your pokemon' : name}
              </Typography>
            </Box>
            {withStats && (
              <>
                <Divider
                  sx={{
                    ml: '10px',
                    mr: '10px',
                  }}
                />
                <Box
                  id="pokemon-cards-battle-stats"
                  sx={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Stack
                    id="stat-list"
                    spacing={1}
                    sx={{
                      p: '10px',
                    }}
                  >
                    {placeholder && (
                      <>
                        <Stat
                          statLabel={'Hp'}
                          value={100}
                          placeholder={placeholder}
                        />
                        <Stat
                          statLabel={'Attack'}
                          value={100}
                          placeholder={placeholder}
                        />
                        <Stat
                          statLabel={'Defense'}
                          value={100}
                          placeholder={placeholder}
                        />
                        <Stat
                          statLabel={'Speed'}
                          value={100}
                          placeholder={placeholder}
                        />
                      </>
                    )}
                    {!placeholder && (
                      <>
                        <Stat statLabel={'Hp'} value={hp * 10} />
                        <Stat statLabel={'Attack'} value={attack * 10} />
                        <Stat statLabel={'Defense'} value={defense * 10} />
                        <Stat statLabel={'Speed'} value={speed * 10} />
                      </>
                    )}
                  </Stack>
                </Box>
              </>
            )}
          </>
        )}
      </Box>
    </>
  );
}

const PokemonCardStyles = {
  container: {
    boxShadow: 3,
    mb: '10px',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'lightgreen',
    },
  },
  containerWStats: {
    boxShadow: 3,
    mb: '10px',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
  },
  wrapperWoStats: {
    width: '100%',
    height: '80%',
  },
  statsImgWrapper: {
    width: '100%',
    height: '40%',
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
  },
  placeholderImg: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(10%) grayscale(100%)',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '20%',
    width: '100%',
    pl: '4px',
  },
  labelWithStats: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '10%',
    width: '100%',
    pl: '10px',
  },
};

export default PokemonCard;
