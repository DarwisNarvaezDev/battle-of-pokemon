import { Box, Container, Typography } from "@mui/material";

function BattleViewHeader(props) {

  const {battleViewTitle} = props;

  return (
    <>
      <Box
        id="battle-view-header"
        aria-label="Header of the main app's view"
        sx={BattleViewHeaderStyles}
      >
        <Typography variant="h4">{battleViewTitle}</Typography>
      </Box>
    </>
  );
}

const BattleViewHeaderStyles = {
  width: '100%',
  height: '10%',
  display: "flex",
  justifyContent: "left",
  alignItems: "center"
}

export default BattleViewHeader;
