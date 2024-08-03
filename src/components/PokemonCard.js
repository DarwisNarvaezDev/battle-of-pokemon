import { Box, Typography } from "@mui/material";

function PokemonCard(props) {

  const { 
    id,
    name,
    attack,
    defense,
    hp,
    speed,
    type,
    imageUrl
  } = props;

  return (
    <>
      <Box
        id="pokemon-card-container"
        sx={PokemonCardStyles.container}
      >
        <Box
          id="pokemon-card-img-wrapper"
          sx={PokemonCardStyles.wrapper}
        >
          <img
            style={PokemonCardStyles.img}
            src={imageUrl}
            alt={name}
          ></img>
        </Box>
        <Box
          id="pokemon-card-name"
          sx={PokemonCardStyles.label}
        >
          <Typography variant="body1">{name}</Typography>
        </Box>
      </Box>
    </>
  );
}

const PokemonCardStyles = {
  container: {
    boxShadow: 3,
    mb: "10px",
    overflow: 'hidden',
    width: "100%",
    height: "100%",
    borderRadius: "5px"
  },
  wrapper: {
    width: '100%',
    height: '80%',
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '20%',
    width: '100%',
    pl: '6px',
  }
}

export default PokemonCard;
