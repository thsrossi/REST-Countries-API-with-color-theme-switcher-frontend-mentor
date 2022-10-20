import styled from "styled-components";

export const Container = styled.div `
    background: ${props => props.theme.colors.backgroundSecondary};
    padding: 10px 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const Row = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
    z-index: 2;
    margin-bottom: 30px;
    margin-top: 30px
`