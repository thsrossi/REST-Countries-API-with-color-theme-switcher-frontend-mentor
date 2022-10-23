import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import { MenuItem, OutlinedInput, Select } from '@mui/material';

export const SelectRegion = styled(FormControl)(({theme})=>({
    [theme.breakpoints.between('xs', 'sm')]: {
        width: '50%',
        marginTop: '30px'
      },
    label: {fontWeight: 300}
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
}))

export const StyledSelect = styled(Select)(({theme})=>({
    ...(theme.palette.mode == 'light' && {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000000c7'
        }
    })
    
}))