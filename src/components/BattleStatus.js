import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

function BattleStatus(props) {

  const { color, message } = props;

  return (
    <>
      <Box
        id="pokemon-battle-status"
        aria-label="Pokemon battle status panel"
        sx={BattleStatusStyles(color).panel}
      >
        <Typography variant="h6" sx={{ pl: '20px' }}>{message}</Typography>
      </Box>
    </>
  );
}

const BattleStatusStyles = (color) => {
  return {panel: {
    width: '100%',
    height: '50px',
    minHeight: '50px',
    border: '0.5px solid grey',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: color
  }}
}

export const BattleStatusSeverity = {
  INFO: { color: "rgba(156, 225, 255, 0.3)" },
  SUCCESS: { color: "rgba(0, 179, 255, 0.3)" },
  DANGER: { color: "rgba(153, 0, 0, 0.3)" }
};

export default BattleStatus;
