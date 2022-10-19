import React from "react";
// import { Container } from "./style";
import Container from '@mui/material/Container';
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import {styled} from '@mui/material/styles'

interface Props{
    toggleTheme(): void;
}

const StyledAppBar = styled(AppBar)(({theme})=>({
    backgroundColor: theme.palette.background.paper,
}))

const StyledToolBar = styled(Toolbar)(({theme})=>({
    justifyContent:'space-between'
}))

export function Header({toggleTheme}: Props){
    return(
        <StyledAppBar position="static">
            <StyledToolBar>
            <h2 >
                Where in the world?
            </h2>
            <Button 
                onClick={toggleTheme}
            >
                Dark Mode
            </Button>
            </StyledToolBar>
            
        </StyledAppBar >
    )
}