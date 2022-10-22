import React from "react";
// import { Container } from "./style";
import Container from '@mui/material/Container';
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import {styled} from '@mui/material/styles'
import { useNavigate } from "react-router-dom";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

interface Props{
    toggleTheme(): void;
    theme: string;
}

const StyledAppBar = styled(AppBar)(({theme})=>({
    backgroundColor: theme.palette.background.paper,
}))

const StyledToolBar = styled(Toolbar)(({theme})=>({
    justifyContent:'space-between'
}))

export function Header({toggleTheme, theme}: Props){
    const navigate = useNavigate();
    return(
        <StyledAppBar position="static">
            <StyledToolBar>
            <h2 onClick={()=>navigate("/")} style={{cursor: 'pointer'}}>
                Where in the world?
            </h2>
            <Button 
                startIcon={theme == 'dark' ? <DarkModeOutlinedIcon/> : <LightbulbOutlinedIcon/>}
                onClick={toggleTheme}
            >
                {theme == 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
            </StyledToolBar>
            
        </StyledAppBar >
    )
}