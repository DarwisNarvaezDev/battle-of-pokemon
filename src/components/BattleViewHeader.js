import { Box, Container, Typography } from "@mui/material";

function BattleViewHeader(props) {

  const {battleViewTitle} = props;

  return (
    <>
      <Box
        id="battle-view-header"
        aria-label="Header of the main app's view"
        sx={BattleViewHeaderStyles.container}
      >
        <Typography 
          sx={BattleViewHeaderStyles.text}
        >{battleViewTitle}</Typography>
      </Box>
    </>
  );
}

const BattleViewHeaderStyles = {
  container: {
    width: '100%',
    height: '10%',
    display: "flex",
    justifyContent: "left",
    alignItems: "center"
  },
  text: {
    typography: {
      xs: "h5",
      sm: "h5",
      lg: "h4"
    }
  }
}

export default BattleViewHeader;
