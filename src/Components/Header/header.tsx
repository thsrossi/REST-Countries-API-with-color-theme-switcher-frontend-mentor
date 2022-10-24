import React from "react";
// import { Container } from "./style";
import Container from '@mui/material/Container';
import { AppBar, Button, Toolbar, Typography, useMediaQuery } from "@mui/material";
import {styled} from '@mui/material/styles'
import { useNavigate } from "react-router-dom";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { HeaderTitle } from "../styledMUI";

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

    const isSmallScreen = useMediaQuery((themeMui:any) => themeMui.breakpoints.down("sm"));

    const navigate = useNavigate();
    return(
        <StyledAppBar position="static">
            <StyledToolBar>
            <HeaderTitle variant='h2'  onClick={()=>navigate("/")} style={{cursor: 'pointer'}}>
                Where in the world?
            </HeaderTitle>
            <Button 
                startIcon={theme == 'dark' ? <LightbulbIcon/> : <DarkModeIcon/>}
                onClick={toggleTheme}
                size={isSmallScreen ? 'small' : 'medium'}
            >
                {theme == 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
            </StyledToolBar>
            
        </StyledAppBar >
    )
}