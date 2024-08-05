import { Box, Divider, Skeleton, Typography } from "@mui/material";

function OpponentPlaceholder() {
  return (
    <>
      <Box
        id="pokemon-oponent-placeholder"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          gap: 3,
          alignItems: 'center',
        }}
      >
        <Skeleton variant="circular" width={'120px'} height={'120px'} sx={{}} />
        <Typography
          sx={{
            pl: '10px',
            color: 'darkgray',
          }}
          variant="h5"
        >
          Waiting for opponent
        </Typography>
        <Skeleton
          variant="rounded"
          width={'90%'}
          height={'10px'}
          sx={{
            ml: '10px',
            color: 'darkgray',
          }}
        />
        <Skeleton
          variant="rounded"
          width={'90%'}
          height={'10px'}
          sx={{
            ml: '10px',
            color: 'darkgray',
          }}
        />
        <Skeleton
          variant="rounded"
          width={'90%'}
          height={'10px'}
          sx={{
            ml: '10px',
            color: 'darkgray',
          }}
        />
        <Skeleton
          variant="rounded"
          width={'90%'}
          height={'10px'}
          sx={{
            ml: '10px',
            color: 'darkgray',
          }}
        />
        <Divider />
        <Divider />
      </Box>
    </>
  );
}

export default OpponentPlaceholder;
