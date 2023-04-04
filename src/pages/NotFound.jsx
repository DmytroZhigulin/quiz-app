import React from 'react';
import { 
    styled, 
    Typography,
    Box,
  } from '@mui/material';

const NotFoundWrap = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: '30px',
    backgroundImage: 'linear-gradient(to right bottom, #726cf8, #9a67f2, #ba63e9, #d45edf, #ea5bd4)',
}));

const ErrorCode = styled(Typography)(() => ({
  fontSize: '20vw',
  color: '#ffffff',
  fontWeight: 'bold',
}));

const ErrorDescr = styled(Typography)(() => ({
  fontSize: '3vw',
  color: '#ffffff',
}));

export default function NotFound() {

  return (
    <Box>
      <NotFoundWrap container 
        spacing={1}
      >
        <ErrorCode>
          404
        </ErrorCode>
        <ErrorDescr>
          сторінку не знайдено
        </ErrorDescr>
      </NotFoundWrap>
    </Box>
  );
}