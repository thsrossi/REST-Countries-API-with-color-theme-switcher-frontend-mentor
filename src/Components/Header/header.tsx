import React from "react";
import { Container } from "./style";

interface Props{
    toggleTheme(): void;
}

export function Header({toggleTheme}: Props){
    return(
        <Container>
            <h2>
                Where in the world?
            </h2>
            <button 
                onClick={toggleTheme}
            >
                Dark Mode
            </button>
        </Container>
    )
}