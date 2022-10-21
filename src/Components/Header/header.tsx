import React from "react";
// import { Container } from "./style";
import Container from '@mui/material/Container';
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import {styled} from '@mui/material/styles'
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    return(
        <StyledAppBar position="static">
            <StyledToolBar>
            <h2 onClick={()=>navigate("/")} style={{cursor: 'pointer'}}>
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