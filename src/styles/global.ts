import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif!important;
    }

    body{
        background: ${props => props.theme.colors.background};
        font-size: 16px;
        color: ${props => props.theme.colors.primary};
        font-family: 'Nunito Sans', sans-serif!important;
    }
`