import { Container } from "@mui/material";

function PokemonSelection() {
  return (
    <>
      <Container
        id="battle-view-pokemon-select"
        aria-label="Selection panel for pokemons"
        style={{
          width: '100%',
          height: '25%',
          backgroundColor: 'green',
          display: "flex",
        }}
      ></Container>
    </>
  );
}

const PokemonSelectionStyles = {
  container: {
    width: '100%',
    height: '25%',
    backgroundColor: 'green',
  }
}

export default PokemonSelection;
