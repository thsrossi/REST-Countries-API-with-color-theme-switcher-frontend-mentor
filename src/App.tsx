import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
// import { ThemeProvider as MuiTheme } from '@mui/styled-engine-sc'
import GlobalStyle from './styles/global'
import { Header } from './Components/Header/header'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistedState'
import Home from './pages/home'
import { ThemeProvider as MuiTheme, createTheme } from '@mui/material/styles'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const themeMui = createTheme({
    palette: {      
        mode: theme?.title == 'light' ? 'light' : 'dark',
        background:{
          default: theme.colors.background,
          paper: theme.colors.backgroundSecondary
        },
        primary: {
          main: theme.colors.primary,
          dark: theme.colors.primary,
          light: theme.colors.primary,
          contrastText: theme.colors.primary
        }
    },
    typography:{
      h6 : {
        display: 'inline-block', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '100%'
    }}
  })

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      
    <div className="App">
      <GlobalStyle/>
      {/* <CssBaseline/> */}
      <MuiTheme theme={themeMui}>
      <Header toggleTheme={toggleTheme}/>
      
      <Home/>
      
      </MuiTheme>
    </div>
    
    </ThemeProvider>
  )
}

export default App
