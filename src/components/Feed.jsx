import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {BorderRight} from '@mui/icons-material';
import SideBar from './SideBar';

const Feed = () => (
  <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
    <Box
      sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}
    >
      <SideBar></SideBar>
      <Typography className='copywrite' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
        Copywrite 2023 JSM Media
      </Typography>
    </Box>
  </Stack>
);
export default Feed;