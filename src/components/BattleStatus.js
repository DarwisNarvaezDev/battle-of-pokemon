import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function BattleStatus(props) {

  const { color, message } = props;
  const [renderingColor, setRenderingColor] = useState(color);

  useEffect(()=>{
    console.log(color);
    setRenderingColor(color);
  },[color])

  return (
    <>
      <Box
        id="pokemon-battle-status"
        aria-label="Pokemon battle status panel"
        sx={BattleStatusStyles(renderingColor).panel}
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
  SUCCESS: { color: "rgba(0, 128, 2, 0.3)" },
  DANGER: { color: "rgba(153, 0, 0, 0.3)" }
};

export default BattleStatus;
