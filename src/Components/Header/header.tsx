import React from "react";
import { Container } from "./style";

interface Props{
    toggleTheme(): void;
}

export function Header({toggleTheme}: Props){
    return(
        <Container>
            <h3>
                Where in the world?
            </h3>
            <button 
                onClick={toggleTheme}
            >
                Dark Mode
            </button>
        </Container>
    )
}