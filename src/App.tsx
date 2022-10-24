import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import { Header } from './Components/Header/header'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistedState'
import Home from './pages/Home/home'
import { ThemeProvider as MuiTheme, createTheme } from '@mui/material/styles'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Details } from './pages/Details/details'
import themeMui from './styles/themes/muiTheme'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)


  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }



  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MuiTheme theme={themeMui(theme)}>
            <Header toggleTheme={toggleTheme} theme={theme.title}/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/details/:id" element={<Details/>}/>
            </Routes>
            
          </MuiTheme>
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
