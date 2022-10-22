import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import { MenuItem, OutlinedInput, Typography } from '@mui/material';

export const SelectRegion = styled(FormControl)(({theme})=>({
    [theme.breakpoints.between('xs', 'sm')]: {
        width: '50%',
        marginTop: '30px'
      },
    backgroundColor: theme.palette.background.paper,
}))

export const Option = styled(MenuItem)(({theme})=>({
    [theme.breakpoints.between('xs', 'sm')]: {
        width: '50%',
      }
}))

export const SearchInput = styled(OutlinedInput)(({theme})=>({
    [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
        
    },
    backgroundColor: theme.palette.background.paper
}))