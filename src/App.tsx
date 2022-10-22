import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
// import { ThemeProvider as MuiTheme } from '@mui/styled-engine-sc'
import GlobalStyle from './styles/global'
import { Header } from './Components/Header/header'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistedState'
import Home from './pages/Home/home'
import { ThemeProvider as MuiTheme, createTheme } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Details } from './pages/Details/details'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const themeMui = createTheme({
    palette: {
      mode: theme?.title == 'light' ? 'light' : 'dark',
      background: {
        default: theme.colors.background,
        paper: theme.colors.backgroundSecondary
      },
      primary: {
        main: theme.colors.primary,
        dark: theme.colors.primary,
        light: theme.colors.primary,
        contrastText: theme.colors.primary
      },
      secondary: {
        main: theme?.colors?.secondary,
        dark: theme?.colors?.secondary,
        light: theme?.colors?.secondary,
        contrastText: theme?.colors?.secondary
      }
    },
    typography: {
      h6: {
        display: 'inline-block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '100%'
      },
      body1:{
        color: theme.colors.primary,
        fontWeight: 600
      },
      body2:{
        color: theme.colors.secondary,
        fontWeight: 300,
        fontSize: '1rem'
      }
    }
  })

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MuiTheme theme={themeMui}>
            <Header toggleTheme={toggleTheme} theme={theme.title}/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/details/:id" element={<Details/>}/>
            </Routes>
            
          </MuiTheme>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
