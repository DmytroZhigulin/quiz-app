import React from 'react';
import { 
    styled, 
    Typography,
    Box,
  } from '@mui/material';

const FavouriteWrap = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: '30px',
    backgroundImage: 'linear-gradient(to right bottom, #726cf8, #9a67f2, #ba63e9, #d45edf, #ea5bd4)',
}));

export default function NotFound() {

  return (
    <Box>
      <FavouriteWrap container 
        spacing={1}
      >
        <Typography variant='h1'>
          Тут ваші обрані курси
        </Typography>
      </FavouriteWrap>
    </Box>
  );
}