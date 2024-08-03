import { Container, Typography } from "@mui/material";

function BattleViewHeader(props) {

  const {battleViewTitle} = props;

  return (
    <>
      <Container
        id="battle-view-header"
        aria-label="Header of the main app's view"
        style={{
          with: '100%',
          height: '10%',
          backgroundColor: 'blue',
        }}
      >
        <Typography variant="h4">{battleViewTitle}</Typography>
      </Container>
    </>
  );
}

export default BattleViewHeader;
