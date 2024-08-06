import { Box, LinearProgress, Typography } from "@mui/material";

function Stat(props) {

  const {statLabel, value, placeholder} = props;

  return (
    <>
      <Box
        id="stat"
        sx={{
          width: '100%',
          height: '28px',
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="caption">{statLabel}</Typography>
        <LinearProgress
          variant="determinate"
          value={value}
          color={'inherit'}
          sx={{
            height: "8px",
            width: "100%",
            borderRadius: '5px',
            color: placeholder ? 'grey' : 'limegreen',
            mb: 0
          }}
        ></LinearProgress>
      </Box>
    </>
  );
}

export default Stat;
